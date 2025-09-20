import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Item } from './models/Item';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydatabase');

app.get('/api/items', async (_req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(3000, () => console.log('Server running on port 3000'));
