import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "We need a name to reply to.").max(120),
  email: z.string().trim().email("That email doesn't look right. Mind checking it?"),
  company: z.string().trim().max(200).optional(),
  path: z.enum(["validate", "build", "fix", "keep", "not-sure"]),
  message: z
    .string()
    .trim()
    .min(20, "Give us a bit more to go on.")
    .max(2000),
  website: z.string().max(200).optional(),
  turnstileToken: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function formatValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field === "string" && !errors[field]) {
      errors[field] = issue.message;
    }
  }

  return errors;
}
