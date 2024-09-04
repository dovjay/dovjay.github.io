import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: 'content',
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