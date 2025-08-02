import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DriverServices } from './driver.service';

const getAllBookingRides = catchAsync(async (req: Request, res: Response) => {
  const updatedRide = await DriverServices.getAllBookingRides();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Pending booking Retrieved',
    data: updatedRide,
  });
});

const bookingStatus = catchAsync(async (req: Request, res: Response) => {
  const { rideId } = req.params;
  const payload = req.body;

  const updatedRide = await DriverServices.bookingStatus(rideId, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking status updated successfully',
    data: updatedRide,
  });
});

export const DriverControllers = {
  getAllBookingRides,
  bookingStatus,
};
