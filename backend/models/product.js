import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, requided: true },
  description: { type: String, requided: true },
  price: { type: Number, requided: true },
  inStock: { type: Boolean, requided: true },
});

const Product = mongoose.model('Product', ProductSchema);

export { Product };
