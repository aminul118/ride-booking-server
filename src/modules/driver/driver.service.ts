import { IRide } from '../ride/ride.interface';
import { Ride } from '../ride/ride.model';

const getAllBookingRides = async () => {
  const result = await Ride.find();
  return result;
};

const bookingStatus = async (rideId: string, payload: Partial<IRide>) => {
  const result = await Ride.findByIdAndUpdate(rideId, payload, { new: true });
  return result;
};

export const DriverServices = {
  getAllBookingRides,
  bookingStatus,
};
