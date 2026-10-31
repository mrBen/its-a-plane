// Every string the player reads lives here, so a French version is one more
// object with the same keys (decision 40).
export const strings = {
  siteTitle: "It's a Plane!",
  tagline: 'But which one?',
  units: {
    'engine-count': {
      name: 'Count the engines',
      summary: 'Four engines or two? Learn the first thing to look for.',
      teaching:
        'Count the engines under the wings. The A380 has four, two on each wing. The A320 has two, one on each wing. Most airliners today have two.',
    },
  },
  unitStart: 'Start',
  startLesson: 'Start the lesson',
  showTeaching: 'See the two photos again',
  lesson: {
    question: 'Which aircraft is this?',
    photoAlt: 'An airliner. Name the model.',
    cropAlt: 'Part of an airliner. Name the model.',
    next: 'Next',
    finish: 'See the score',
    exercise: (n: number, total: number) => `Exercise ${n} of ${total}`,
    repeat: (n: number) => `Exercise ${n} again`,
    score: (right: number) => `Score: ${right}`,
    done: (right: number, total: number) => `Lesson done. ${right} of ${total} right.`,
    playAgain: 'Play again',
    backToUnits: 'Back to the units',
    right: 'Correct',
    wrong: 'Not quite',
  },
  photoCredit: (author: string) => `Photo: ${author}`,
  unitProgress: (done: number, total: number) => `${done} of ${total} lessons done`,
  theme: {
    label: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
};
