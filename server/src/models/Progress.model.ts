import { Schema, model, Document, Types } from 'mongoose';

export interface IProgress extends Document {
  course: string;
  actualStep: string;
  actualIndex: number;
}

const progressSchema = new Schema({
  course: {
    type: Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  actualStep: {
    type: Types.ObjectId,
    ref: 'Step',
    required: true,
  },
  actualIndex: {
    type: Number,
    required: true,
  },
});

export default model<IProgress>('Progress', progressSchema);
