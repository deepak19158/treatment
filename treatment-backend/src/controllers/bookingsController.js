import Booking from "../models/booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    console.log("Booking saved:", booking);
    res.status(201).json({ message: "Booking saved successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error saving booking.", error });
  }
};
