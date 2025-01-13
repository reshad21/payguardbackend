import { z } from 'zod';

const paymentRequestValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        amount: z.number().positive("Amount must be a positive number"),
        email: z.string().email("Invalid email address"),
        status: z.enum(["pending", "approved", "rejected"]).default("pending"),
    }),
});

export const PaymentRequestValidation = {
    paymentRequestValidationSchema,
};
