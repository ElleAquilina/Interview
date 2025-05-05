import { z } from 'zod'

export const contactSchema = z.object({
    srno: z.string(),
    name: z.string()
        .min(1, 'Name is required'),
    phone: z
        .string()
        .regex(
            /^\+?\d{0,3}?[-. ]?(\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}$/,
            'Invalid phone number format'
        ),
    email: z.string().email('Invalid email address'),
})
