import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().nullable().default(null)
  })
});

export const collections = { pages };
