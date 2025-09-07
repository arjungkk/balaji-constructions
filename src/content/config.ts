import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects };
