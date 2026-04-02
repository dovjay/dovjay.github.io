import { defineCollection } from "astro:content";
import { glob, file } from 'astro/loaders';
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ base: 'src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    isDraft: z.boolean(),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const projectCollection = defineCollection({

});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
};