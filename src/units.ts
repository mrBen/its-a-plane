// For each unit, the two photos of its teaching screen and the part they mark
// (decision 17). The key is the unit id in the URL and in strings.ts.
export const units = {
  'engine-count': { photoIds: ['a380-800-1', 'a320-1'], part: 'engine' },
} as const;

export type UnitId = keyof typeof units;
