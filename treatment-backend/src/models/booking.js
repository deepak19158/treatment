// filepath: c:\Users\HP\Desktop\treatment\treatment-backend\src\models\booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  preferredDate: String,
  preferredTime: String,
  category: String,
  service: String,
  packageName: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Booking", bookingSchema);
