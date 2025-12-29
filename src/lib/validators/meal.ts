import { z } from "zod";

export const mealSchema = z.object({
  name: z.string().min(1, "Name is required"),
  calories: z
    .number()
    .int("Calories must be an integer")
    .min(1, "Calories must be at least 1"),
});
