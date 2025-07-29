import { IRide } from './ride.interface';
import { Ride } from './ride.model';

const createBooking = async (payload: Partial<IRide>) => {
  const result = await Ride.create(payload);
  return result;
};
const getBooking = async (userId: string) => {
  const result = await Ride.findOne({ userId });
  return result;
};
const deleteBooking = async (id: string) => {
  const result = await Ride.findByIdAndDelete(id);
  return result;
};

export const RideServices = { createBooking, getBooking, deleteBooking };
