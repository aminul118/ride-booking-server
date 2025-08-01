import { model, Schema } from 'mongoose';
import { IDriver } from './driver.interface';

const driverSchema = new Schema<IDriver>(
  {
    bookingUser: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Driver = model<IDriver>('Driver', driverSchema);

export { Driver };
