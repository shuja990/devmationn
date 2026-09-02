import { z } from 'zod';

/**
 * One schema, used by both the client form and the route handler.
 *
 * This is the point: client-side validation is a convenience for the user and
 * is trivially bypassed, so the server must re-validate. Sharing the schema
 * means the two can never drift apart and disagree about what is valid.
 */
export const contactSchema = z.object({
  name: z.string().min(2, 'Please give us a name we can use.').max(120),
  email: z.email('That does not look like an email address.').max(200),
  company: z.string().max(160).optional().or(z.literal('')),
  service: z.string().max(80).optional().or(z.literal('')),
  message: z
    .string()
    .min(20, 'A sentence or two more would help us give you a useful answer.')
    .max(5000),
  /** Cloudflare Turnstile token. Absent in development. */
  token: z.string().optional(),
  /**
   * Honeypot. Real users never see this field, so anything in it is a bot.
   *
   * Deliberately NOT constrained to empty. A validation error here would
   * return a 400 naming the field, telling a bot exactly what caught it. It
   * passes validation instead, and the route handler drops the submission
   * with a 200 so the rejection is indistinguishable from success.
   */
  website: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
