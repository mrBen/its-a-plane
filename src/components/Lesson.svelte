<script lang="ts">
  import { strings } from '../strings';

  interface Model {
    id: string;
    designation: string;
  }

  interface Photo {
    id: string;
    modelId: string;
    image: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  }

  interface Exercise {
    photo: Photo;
    answer: Model;
    candidates: Model[];
  }

  interface Props {
    models: Model[];
    photos: Photo[];
    base: string;
  }

  // Decision 6: one lesson holds five exercises.
  const LESSON_LENGTH = 5;
  // Decision 14: four candidate buttons.
  const CANDIDATE_COUNT = 4;

  let { models, photos, base }: Props = $props();

  function shuffle<T>(items: T[]): T[] {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  function draw(): Exercise[] {
    return shuffle(photos)
      .slice(0, LESSON_LENGTH)
      .map((photo) => {
        const answer = models.find((m) => m.id === photo.modelId)!;
        const wrong = shuffle(models.filter((m) => m.id !== answer.id)).slice(0, CANDIDATE_COUNT - 1);
        return { photo, answer, candidates: shuffle([answer, ...wrong]) };
      });
  }

  let queue = $state(draw());
  let index = $state(0);
  let picked = $state<string | null>(null);
  let score = $state(0);

  let exercise = $derived(queue[index]);
  let finished = $derived(index >= queue.length);
  let isLast = $derived(index === queue.length - 1);

  function pick(modelId: string) {
    if (picked) return;
    picked = modelId;
    if (modelId === exercise.answer.id) score++;
  }

  function next() {
    picked = null;
    index++;
  }

  function buttonClass(modelId: string): string {
    if (!picked) return '';
    if (modelId === exercise.answer.id) return 'is-success';
    if (modelId === picked) return 'is-danger';
    return '';
  }
</script>

<div class="lesson">
  {#if finished}
    <!-- TODO: task 11 replaces this line with the score screen. -->
    <p class="title is-4">{strings.lesson.done(score, queue.length)}</p>
  {:else}
    <div class="level is-mobile">
      <p class="level-left">{strings.lesson.exercise(index + 1, queue.length)}</p>
      <p class="level-right">{strings.lesson.score(score)}</p>
    </div>
    <progress class="progress is-large is-primary" value={index} max={queue.length}></progress>

    <div class="card">
      <div class="card-image">
        <img src={`${base}/${exercise.photo.image}`} alt={strings.lesson.photoAlt} />
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
        {#if picked}
          <!-- TODO: task 10 moves this button to the back of the card. -->
          <button type="button" class="button is-primary is-rounded is-medium next" onclick={next}>
            {isLast ? strings.lesson.finish : strings.lesson.next}
          </button>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
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
  .next {
    margin-top: 1.25rem;
  }
</style>
