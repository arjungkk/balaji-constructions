import { defineCollection, z } from "astro:content";

// Define "projects" collection schema
const projects = defineCollection({
  type: "content", // can be "content" (Markdown/MDX) or "data" (JSON/YAML)
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  projects,
};
