import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RideServices } from './ride.service';

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const data = await RideServices.createBooking(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Booking Create Successfully',
    data,
  });
});

export const RideControllers = {
  createBooking,
};
