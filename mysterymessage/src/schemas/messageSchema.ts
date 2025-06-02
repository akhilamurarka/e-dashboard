import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(15, { message: "Content must be of atleast 15 characters" })
    .max(400, { message: "Content must be not exceed 400 characters" }),
});
