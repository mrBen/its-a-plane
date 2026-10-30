// Every string the player reads lives here, so a French version is one more
// object with the same keys (decision 40).
export const strings = {
  siteTitle: "It's a Plane!",
  tagline: 'But which one?',
  units: {
    'engine-count': {
      name: 'Count the engines',
      summary: 'Four engines or two? Learn the first thing to look for.',
    },
  },
  unitStart: 'Start',
  unitProgress: (done: number, total: number) => `${done} of ${total} lessons done`,
  theme: {
    label: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
  },
};
