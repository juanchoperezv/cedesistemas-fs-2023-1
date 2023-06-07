const mongoose = require('mongoose');

const {Schema} = mongoose;

const OrderScheme = new Schema(
  {
    clotheId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "clothes"
    },
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "users"
    },
    buyerId: {
      type: Schema.Types.ObjectId,
       ref: "users"
    },
    price: {
      type: Number,
      default: 0,
      required: true
    },
    commission: {
      type: Number,
      default: 0,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    paymentType: {
      type: Number,
      default: 1,
      required: true
    },
    shippingAddress: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      default: 1,
      required: true
    },
    isRemoved: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Order = mongoose.model("orders", OrderScheme);

module.exports = Order;
