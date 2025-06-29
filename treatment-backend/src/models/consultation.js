import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  preferredDate: String,
  preferredTime: String,
  symptoms: String,
  treatment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Consultation", consultationSchema);
