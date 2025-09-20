import mongoose from 'mongoose';

export interface IItem extends mongoose.Document {
  name: string;
  price: number;
}

const ItemSchema = new mongoose.Schema<IItem>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Item = mongoose.model<IItem>('Item', ItemSchema);

