import { Router } from 'express';
import { RideControllers } from './ride.controller';

const router = Router();

router.post('/create', RideControllers.createBooking);

export const RideRoutes = router;
