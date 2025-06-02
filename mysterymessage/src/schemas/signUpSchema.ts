import { z } from "zod/v4";

export const usernameValidation = z
  .string()
  .min(3, "Username must be atleast 3 characters")
  .max(25, "Username must not exceed 25 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(7, { message: "Password must be atleast 7 characters long" }),
});
