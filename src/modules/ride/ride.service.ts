import httpStatus from 'http-status-codes';
/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../errorHelpers/AppError';
import { IRide } from './ride.interface';
import { Ride } from './ride.model';

const createBooking = async (payload: IRide) => {
  const bookings = await Ride.find({ userId: payload.userId });

  if (bookings.length > 0) {
    throw new AppError(httpStatus.BAD_REQUEST, 'You already have an active booking');
  }

  const result = await Ride.create(payload);
  return result;
};

const getMyBooking = async (userId: string) => {
  const ride = await Ride.findOne({ userId }).populate('userId');

  if (!ride) return null;

  const rideObj = ride.toObject();
  const user = rideObj.userId as any;

  if (user?.password) {
    delete user.password;
  }

  return {
    ...rideObj,
    userId: user,
  };
};

const deleteBooking = async (id: string) => {
  const result = await Ride.findByIdAndDelete(id);
  return result;
};

export const RideServices = { createBooking, getMyBooking, deleteBooking };
