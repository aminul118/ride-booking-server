import { Types } from 'mongoose';

enum IDriverStatus {
  PICKED_UP = 'Picked Up',
  IN_TRANSIT = 'In Transit',
  COMPLETED = 'Completed',
}

interface IDriver {
  bookingUser: Types.ObjectId;
}

export { IDriverStatus, IDriver };
