import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string,
  price: number;
  image: string;
  created: number;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'code:required'],
  },
  price: {
    type: Number,
    required: [true, 'code:required'],
    default: 0,
  },
  image: {
    type: String,
    required: [true, 'code:required'],
  },
  created: {
    type: Number,
    required: [true, 'code:required'],
    default: () => Date.now(),
  },
});

export default model<IProduct>('Product', productSchema);
