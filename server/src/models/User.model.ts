import { Schema, model, Document, Types } from 'mongoose';

export interface IUser extends Document {
  mail: string;
  userName: string;
  pass: string;
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
    required: true,
  },
  courses: {
    type: [Types.ObjectId],
    required: [true, 'code:required'],
    default: [],
  },
  union: {
    type: Number,
    required: true,
    default: Date.now(),
  },
});

export default model<IUser>('User', userSchema);
