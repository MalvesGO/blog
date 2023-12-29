import * as z from "zod";

export const BlogFormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  image_url: z.string().url({ message: "Invalid URL." }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
  is_published: z.boolean(),
  is_premium: z.boolean(),
});

export type BlogFormSchemaType = z.infer<typeof BlogFormSchema>;
