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

// Home page schema
const homeCollection = defineCollection({
  type: "data",
  schema: z.object({
    hero_title: z.string(),
    hero_subtitle: z.string().optional(),
    hero_bg: z.string().optional(),
    hero_button: z.string().optional(),
    hero_button_link: z.string().optional(),
  }),
});

// About page schema
const aboutCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    hero: z.string().optional(),
    story_image: z.string().optional(),
    story_title: z.string().optional(),
    story_body: z.string().optional(),
    values: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    cta_title: z.string().optional(),
    cta_text: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
  home: homeCollection,
  about: aboutCollection
};
