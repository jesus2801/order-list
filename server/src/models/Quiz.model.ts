import { Schema, model, Document } from 'mongoose';

export interface IQUiz extends Document {
  questions: {
    q: string;
    answers: {
      data: string;
      valid: boolean;
    }[];
  }[];
}

const answer = new Schema({
  data: {
    type: String,
    required: true,
  },
  valid: {
    type: Boolean,
  },
});

const quizQuestion = new Schema({
  q: {
    type: String,
    required: true,
  },
  answers: {
    type: [answer],
    required: true,
  },
});

const quizSchema = new Schema({
  questions: {
    type: [quizQuestion],
    required: true,
  },
});

export default model<IQUiz>('Quiz', quizSchema);
