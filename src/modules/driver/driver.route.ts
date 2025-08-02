import { Router } from 'express';
import { DriverControllers } from './driver.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { RideValidations } from '../ride/ride.validation';

const router = Router();

router.get(
  '',
  validateRequest(RideValidations.createRideValidationSchema),
  DriverControllers.getAllBookingRides,
);
router.patch(
  '/:rideId',
  validateRequest(RideValidations.createRideValidationSchema),
  DriverControllers.bookingStatus,
);

export const DriverRoutes = router;
