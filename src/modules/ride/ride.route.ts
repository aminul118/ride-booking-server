import { Router } from 'express';
import { RideControllers } from './ride.controller';

const router = Router();

router.post('/create', RideControllers.createBooking);
// router.get('/:id', RideControllers.getBooking);
router.delete('/:id', RideControllers.deleteBooking);

export const RideRoutes = router;
