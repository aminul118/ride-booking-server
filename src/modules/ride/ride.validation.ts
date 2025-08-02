import { z } from 'zod';
import { IRideStatus } from './ride.interface';

const createRideValidationSchema = z.object({
  latitude: z
    .string()
    .nonempty('Latitude is required')
    .refine((val) => /^-?\d+(\.\d+)?$/.test(val), {
      message: 'Latitude must be a valid number',
    }),

  longitude: z
    .string()
    .nonempty('Longitude is required')
    .refine((val) => /^-?\d+(\.\d+)?$/.test(val), {
      message: 'Longitude must be a valid number',
    }),

  userId: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid userId (must be a valid ObjectId)'),

  driverId: z
    .string()
    .regex(/^[0-9a-fA-F]{24}$/, 'Invalid driverId (must be a valid ObjectId)')
    .optional(),

  status: z.nativeEnum(IRideStatus).optional().default(IRideStatus.PENDING),
});

export const RideValidations = { createRideValidationSchema };
