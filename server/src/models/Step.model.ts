import { Schema, model, Document, Types } from 'mongoose';

export interface IStep extends Document {
  name: string;
  instructions: string[];
  type:
    | 'video'
    | 'quiz'
    | 'vocabulary'
    | 'code_playground'
    | 'create_function'
    | 'code_test';
  data?: string;
  media?: string;
}

const stepSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
    default: [],
  },
  type: {
    type: String,
    enum: [
      'video',
      'quiz',
      'vocabulary',
      'code_playground',
      'create_function',
      'code_test',
    ],
    required: true,
  },
  data: {
    type: Types.ObjectId,
  },
  media: {
    type: String,
  },
});

export default model<IStep>('Step', stepSchema);
