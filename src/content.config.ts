import { defineCollection, reference } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const percent = z.number().min(0).max(100);

const models = defineCollection({
  loader: file('src/content/models.json'),
  schema: z.object({
    id: z.string(),
    manufacturer: z.string(),
    family: z.string(),
    variant: z.string(),
    designation: z.string(),
    engineCount: z.number().int().min(1),
    enginePosition: z.enum(['underwing', 'rear-fuselage', 'tail-and-underwing']),
    tailType: z.enum(['conventional', 't-tail']),
    wingletTypes: z
      .array(z.enum(['none', 'fence', 'canted', 'blended', 'sharklet', 'raked', 'split-scimitar']))
      .min(1),
    tells: z
      .array(
        z.object({
          feature: reference('features'),
          text: z.string(),
        }),
      )
      .min(1),
    photoIds: z.array(reference('photos')),
  }),
});

const photos = defineCollection({
  loader: file('src/content/photos.json'),
  schema: z.object({
    id: z.string(),
    modelId: reference('models'),
    image: z.string(),
    author: z.string(),
    license: z.string(),
    licenseUrl: z.url(),
    sourceUrl: z.url(),
    crops: z.array(
      z.object({
        part: z.string(),
        x: percent,
        y: percent,
        width: percent,
        height: percent,
      }),
    ),
    labels: z.array(
      z.object({
        text: z.string(),
        x: percent,
        y: percent,
      }),
    ),
  }),
});

const features = defineCollection({
  loader: file('src/content/features.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    glossary: z.string(),
    types: z
      .array(
        z.object({
          id: z.string(),
          name: z.string(),
          modelIds: z.array(reference('models')),
        }),
      )
      .min(1),
  }),
});

export const collections = { models, photos, features };
