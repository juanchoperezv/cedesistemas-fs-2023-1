const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserScheme = new Schema(
  {
    name: String,
    phone: String,
    address: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
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

const User = mongoose.model("users", UserScheme);

module.exports = User;
