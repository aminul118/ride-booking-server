import { Types } from 'mongoose';
import { IDriverStatus } from '../driver/driver.interface';

export enum IRideStatus {
  PENDING = 'Pending',
  CANCEL = 'Cancel',
  COMPLETED = 'Completed',
}
interface IRide {
  userId: Types.ObjectId;
  latitude: string;
  longitude: string;
  driverId?: Types.ObjectId;
  status?: IDriverStatus;
}

export { IRide };
