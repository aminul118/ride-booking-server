import { model, Schema } from 'mongoose';
import { IRide, IRideStatus } from './ride.interface';

const rideSchema = new Schema<IRide>(
  {
    latitude: {
      type: String,
      required: true,
    },
    longitude: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    driverId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: Object.values(IRideStatus),
      default: IRideStatus.PENDING,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Ride = model<IRide>('Ride', rideSchema);

export { Ride };
