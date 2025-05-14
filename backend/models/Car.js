// models/Car.js

import { Schema, model as _model } from "mongoose";

const carSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String, // ou [String] si plusieurs images
  },
  available: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true, // createdAt, updatedAt
});

const Car = _model("Car", carSchema);
export default Car;
