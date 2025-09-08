import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string(),
  }),
});

const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    hero: z.string().optional(),
    story_image: z.string().optional(),
    story_title: z.string().optional(),
    story_body: z.string().optional(),
    values: z.array(
      z.object({ title: z.string(), description: z.string() })
    ).optional(),
    cta_title: z.string().optional(),
    cta_text: z.string().optional(),
  }),
});


export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
  pages: pagesCollection,
};
