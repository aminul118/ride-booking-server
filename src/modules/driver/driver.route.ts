import { Router } from 'express';
import { DriverControllers } from './driver.controller';

const router = Router();

router.get('', DriverControllers.getAllBookingRides);
router.patch('/:rideId', DriverControllers.bookingStatus);

export const DriverRoutes = router;
