import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every .md file in src/content/blog/ becomes a post automatically.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
