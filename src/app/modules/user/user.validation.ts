import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object(
    {
      // id: z.string(),
      email: z.string().email(),
      password: z.string(),
      role: z.enum(['admin', 'user']),
    }
  )
});

const updateUserValidationSchema = z.object({
  body: z.object({
    email: z.string().email().optional(),
    password: z.string().max(8).optional(),
    role: z.enum(['admin', 'user']).optional(),
  }),
});

export const UserValidation = {
  userValidationSchema,
  updateUserValidationSchema
};
