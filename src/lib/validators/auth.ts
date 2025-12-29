import { z } from "zod";

// Define Zod schema for validation
export const authSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const mealSchema = z.object({
  name: z.string().min(1, "Name is required"),
  calories: z
    .number()
    .int("Calories must be an integer")
    .min(1, "Calories must be at least 1"),
});
