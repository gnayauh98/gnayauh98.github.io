import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "posts" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
  }),
});

export const collections = { posts };
