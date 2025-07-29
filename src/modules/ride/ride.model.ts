import { model, Schema } from 'mongoose';
import { IRide } from './ride.interface';

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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Ride = model<IRide>('Ride', rideSchema);

export { Ride };
