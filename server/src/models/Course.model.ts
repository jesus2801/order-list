import { Schema, model, Document, Types } from 'mongoose';

export interface ICourse extends Document {
  name: string;
  price: number;
  desc: string;
  image: string;
  steps: string[];
}

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  Steps: {
    type: [Types.ObjectId],
    required: true,
    default: [],
  },
});

export default model<ICourse>('Course', courseSchema);
