<script lang="ts">
  import { strings } from '../strings';
  import Crop from './Crop.svelte';

  interface Model {
    id: string;
    designation: string;
    tell: string;
  }

  interface CropBox {
    part: string;
    x: number;
    y: number;
    width: number;
    height: number;
  }

  interface Photo {
    id: string;
    modelId: string;
    image: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
    crops: CropBox[];
  }

  // Decision 10: a photo to the model, and a crop of one part.
  type Kind = 'photo' | 'crop';

  interface Exercise {
    kind: Kind;
    photo: Photo;
    answer: Model;
    candidates: Model[];
    number: number;
    repeat: boolean;
  }

  interface Props {
    models: Model[];
    photos: Photo[];
    part: string;
    base: string;
  }

  // Decision 6: one lesson holds five exercises.
  const LESSON_LENGTH = 5;
  // Decision 14: four candidate buttons.
  const CANDIDATE_COUNT = 4;

  let { models, photos, part, base }: Props = $props();

  function shuffle<T>(items: T[]): T[] {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  // Decision 11: one lesson mixes the two types. Both must appear, so a draw
  // that comes out one-sided turns one exercise over.
  function drawKinds(count: number): Kind[] {
    const kinds = Array.from({ length: count }, () => (Math.random() < 0.5 ? 'photo' : 'crop'));
    if (!kinds.includes('photo')) kinds[Math.floor(Math.random() * count)] = 'photo';
    if (!kinds.includes('crop')) kinds[Math.floor(Math.random() * count)] = 'crop';
    return kinds;
  }

  function draw(): Exercise[] {
    const kinds = drawKinds(LESSON_LENGTH);
    return shuffle(photos)
      .slice(0, LESSON_LENGTH)
      .map((photo, i) => {
        const answer = models.find((m) => m.id === photo.modelId)!;
        const wrong = shuffle(models.filter((m) => m.id !== answer.id)).slice(0, CANDIDATE_COUNT - 1);
        return {
          kind: kinds[i],
          photo,
          answer,
          candidates: shuffle([answer, ...wrong]),
          number: i + 1,
          repeat: false,
        };
      });
  }

  let queue = $state(draw());
  let index = $state(0);
  let picked = $state<string | null>(null);

  // The mark on the front needs a moment to read before the card turns.
  const REVEAL_DELAY = 800;
  let turned = $state(false);
  let turnTimer: ReturnType<typeof setTimeout> | undefined;

  // Decision 13: the score counts each exercise once, however many times it
  // comes back. Decision 12: a missed exercise returns at the end of the queue.
  let scored = $state<number[]>([]);
  let score = $derived(scored.length);

  let exercise = $derived(queue[index]);
  let finished = $derived(index >= queue.length);
  let isLast = $derived(index === queue.length - 1);
  let correct = $derived(picked !== null && picked === exercise?.answer.id);

  function pick(modelId: string) {
    if (picked) return;
    picked = modelId;
    const right = modelId === exercise.answer.id;
    if (right) {
      if (!scored.includes(exercise.number)) scored.push(exercise.number);
    } else if (!exercise.repeat) {
      queue.push({ ...exercise, repeat: true });
    }
    clearTimeout(turnTimer);
    turnTimer = setTimeout(() => {
      turned = true;
    }, REVEAL_DELAY);
  }

  function next() {
    clearTimeout(turnTimer);
    turned = false;
    picked = null;
    index++;
  }

  function playAgain() {
    clearTimeout(turnTimer);
    queue = draw();
    index = 0;
    picked = null;
    turned = false;
    scored = [];
  }

  // Plan step 5: a finished lesson starts again when the hash comes back to
  // #lesson. A lesson in progress keeps its state.
  $effect(() => {
    function onHash() {
      if (window.location.hash === '#lesson' && finished) playAgain();
    }
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  });

  function buttonClass(modelId: string): string {
    if (!picked) return '';
    if (modelId === exercise.answer.id) return 'is-success';
    if (modelId === picked) return 'is-danger';
    return '';
  }
</script>

<div class="lesson">
  {#if finished}
    <div class="score-screen">
      <p class="title is-4">{strings.lesson.done(score, LESSON_LENGTH)}</p>
      <div class="buttons">
        <button type="button" class="button is-primary is-rounded is-medium" onclick={playAgain}>
          {strings.lesson.playAgain}
        </button>
        <a class="button is-light is-rounded is-medium" href={`${base}/`}>
          {strings.lesson.backToUnits}
        </a>
      </div>
    </div>
  {:else}
    <div class="level is-mobile">
      <p class="level-left">
        {exercise.repeat
          ? strings.lesson.repeat(exercise.number)
          : strings.lesson.exercise(exercise.number, LESSON_LENGTH)}
      </p>
      <p class="level-right">{strings.lesson.score(score)}</p>
    </div>
    <progress class="progress is-large is-primary" value={index} max={queue.length}></progress>

    <div class="card flip-card" class:turned={turned}>
      <div class="flip">
        <div class="face front" aria-hidden={turned} inert={turned}>
          <div class="card-image">
            {#if exercise.kind === 'crop'}
              <Crop photo={exercise.photo} {part} {base} alt={strings.lesson.cropAlt} />
            {:else}
              <img src={`${base}/${exercise.photo.image}`} alt={strings.lesson.photoAlt} />
            {/if}
          </div>
          <div class="card-content">
            <p class="is-size-7 block">
              <!-- The source page names the model in its URL, so it links only after the pick. -->
              {#if picked}
                <a href={exercise.photo.sourceUrl}>{strings.photoCredit(exercise.photo.author)}</a>,
              {:else}
                {strings.photoCredit(exercise.photo.author)},
              {/if}
              <a href={exercise.photo.licenseUrl}>{exercise.photo.license}</a>
            </p>
            <p class="title is-5">{strings.lesson.question}</p>
            <div class="candidates">
              {#each exercise.candidates as model (model.id)}
                <button
                  type="button"
                  class="button is-medium is-fullwidth designation {buttonClass(model.id)}"
                  disabled={picked !== null}
                  onclick={() => pick(model.id)}
                >
                  {model.designation}
                </button>
              {/each}
            </div>
          </div>
        </div>

        <div class="face back" aria-hidden={!turned} inert={!turned}>
          <div class="card-content back-content">
            <p class="block">
              <span class="tag is-medium {correct ? 'is-success' : 'is-danger'}">
                {correct ? strings.lesson.right : strings.lesson.wrong}
              </span>
            </p>
            <p class="designation title is-3">{exercise.answer.designation}</p>
            <p class="block is-size-5">{exercise.answer.tell}</p>
            <button type="button" class="button is-primary is-rounded is-medium" onclick={next}>
              {isLast ? strings.lesson.finish : strings.lesson.next}
            </button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .score-screen {
    padding: 2rem 0;
  }
  .flip-card {
    perspective: 1200px;
  }
  .flip {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    transition: transform 0.55s ease;
  }
  /* Decision 12: the card turns on every answer. */
  .turned .flip {
    transform: rotateY(180deg);
  }
  .face {
    border-radius: var(--bulma-card-radius);
    overflow: hidden;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .front {
    position: relative;
  }
  .back {
    position: absolute;
    inset: 0;
    transform: rotateY(180deg);
    background-color: var(--bulma-card-background-color);
  }
  .back-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .card-image img {
    display: block;
    width: 100%;
  }
  .candidates {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
  /* Bulma dims a disabled button. The marked answers must stay readable. */
  .candidates .button:disabled {
    opacity: 1;
  }
  /* Decision 12 and the plan: no turn under prefers-reduced-motion. */
  @media (prefers-reduced-motion: reduce) {
    .flip {
      transition: none;
    }
  }
</style>
