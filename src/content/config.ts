// src/content/config.ts
import { z, defineCollection } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
  }),
});

export const collections = {
  projects,
};
