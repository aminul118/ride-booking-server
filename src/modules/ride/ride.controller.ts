import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RideServices } from './ride.service';

// User create a booking
const createBooking = catchAsync(async (req: Request, res: Response) => {
  const data = await RideServices.createBooking(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Booking Create Successfully',
    data,
  });
});

// const getMyBooking = catchAsync(async (req: Request, res: Response) => {
//   const userId = req.user.userId as JwtPayload;
//   const data = await RideServices.getMyBooking(userId);
//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: 'Booking Create Successfully',
//     data,
//   });
// });

const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await RideServices.deleteBooking(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking delete Successfully',
    data,
  });
});

export const RideControllers = {
  createBooking,
  deleteBooking,
};
