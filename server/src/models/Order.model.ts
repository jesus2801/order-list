import { Schema, model, Document, Types } from 'mongoose';

export interface IOrder extends Document {
  product: string;
  state: 'canceled' | 'inProgress' | 'onTheWay' | 'delivered';
  clientName: string;
  clientDoc: string;
  created: number;
}

const orderSchema = new Schema({
  product: {
    type: Types.ObjectId,
    ref: 'Product',
  },
  state: {
    type: String,
    enum: ['canceled', 'inProgress', 'onTheWay', 'delivered'],
    default: 'inProgress',
  },
  clientName: {
    type: String,
    required: [true, 'code:required'],
  },
  clientDoc: {
    type: String,
    required: [true, 'code:required'],
  },
  created: {
    type: Number,
    required: [true, 'code:required'],
    default: () => Date.now(),
  },
});

export default model<IOrder>('Order', orderSchema);
