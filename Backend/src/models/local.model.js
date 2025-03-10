import mongoose from "mongoose";

const LocalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["uñas", "spa", "estetica"],
    required: true,
  },
  schedule: {
    type: String,
  },
  socialMedia: {
    instagram: { type: String },
    facebook: { type: String },
    whatsapp: { type: String },
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Local = mongoose.model("Local", LocalSchema);

export default Local;
