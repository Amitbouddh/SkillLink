import { z } from 'zod';
export const registerSchema = z.object({ name: z.string().min(2), email: z.email(), password: z.string().min(8), role: z.enum(['MANUFACTURER', 'ARTISAN']), company: z.string().optional() });
export const loginSchema = z.object({ email: z.email(), password: z.string().min(1) });
export const requirementSchema = z.object({ title: z.string().min(2), type: z.string().min(2), location: z.string().min(2), description: z.string().optional(), deadline: z.coerce.date().optional(), status: z.enum(['DRAFT', 'AI_MATCHING', 'PUBLISHED']).optional() });
export const applicationSchema = z.object({ requirementId: z.string(), skill: z.string(), experienceYears: z.coerce.number().int().nonnegative() });
export const messageSchema = z.object({ recipientId: z.string(), text: z.string().min(1) });
export const reviewSchema = z.object({ artisanId: z.string(), rating: z.coerce.number().min(1).max(5), text: z.string().min(2) });
