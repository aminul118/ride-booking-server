import { Types } from 'mongoose';

interface IRide {
  userId: Types.ObjectId;
  latitude: string;
  longitude: string;
}

export { IRide };
