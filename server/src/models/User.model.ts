import { Schema, model, Document, Types } from 'mongoose';

export type AppProviders = 'google' | 'facebook' | 'local';

export interface IUser extends Document {
  mail: string;
  userName: string;
  pass?: string;
  provider: AppProviders;
  providerId?: string;
  courses: string[];
  points: number;
  union: number;
}

const userSchema = new Schema({
  mail: {
    type: String,
    required: [true, 'code:required'],
    unique: true,
    dropDups: true,
  },
  userName: {
    type: String,
    required: [true, 'code:required'],
    unique: true,
    dropDups: true,
  },
  pass: {
    type: String,
  },
  provider: {
    type: String,
    enum: ['google', 'facebook', 'local'],
    required: true,
    default: 'local',
  },
  providerId: {
    type: String,
  },
  courses: {
    type: [Types.ObjectId],
    required: [true, 'code:required'],
    default: [],
  },
  points: {
    type: Number,
    required: true,
    default: 0,
  },
  union: {
    type: Number,
    required: true,
    default: () => Date.now(),
  },
});

export default model<IUser>('User', userSchema);
