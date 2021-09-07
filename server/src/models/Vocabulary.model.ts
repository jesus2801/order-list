import { Schema, model, Document } from 'mongoose';

export interface IVocabulary extends Document {
  vocabulary: {
    word: string;
    meaning: string;
    photo?: string;
  }[];
}

const wordSchema = new Schema({
  word: {
    type: String,
    required: true,
  },
  meaning: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

const vocabularySchema = new Schema({
  vocabulary: {
    type: [wordSchema],
    required: true,
  },
});

export default model<IVocabulary>('Vocabulary', vocabularySchema);
