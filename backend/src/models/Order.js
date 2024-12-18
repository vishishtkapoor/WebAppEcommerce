import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
  },
  products: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true }
  }],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ['COD'], default: 'COD' },
  status: { type: String, enum: ['pending', 'confirmed', 'delivered'], default: 'pending' }
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);