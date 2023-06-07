const mongoose = require('mongoose');

const {Schema} = mongoose;

const ClotheScheme = new Schema(
  {
    sellerId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users"
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    target: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required: true
    },
    description: String,
    price: {
      type: Number,
      default: false,
      required: true
    },
    status: {
      type: Number,
      default: 1
    },
    isRemoved: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Clothe = mongoose.model("clothes", ClotheScheme);

module.exports = Clothe;
