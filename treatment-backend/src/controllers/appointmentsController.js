import Appointment from "../models/appointment.js";

export const createAppointment = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      preferredDate,
      preferredTime,
      symptoms,
      treatmentFor,
    } = req.body;
    if (
      !name ||
      !phone ||
      !email ||
      !preferredDate ||
      !preferredTime ||
      !treatmentFor
    ) {
      return res
        .status(400)
        .json({ error: "All required fields must be filled." });
    }
    const appointment = new Appointment({
      name,
      phone,
      email,
      preferredDate,
      preferredTime,
      symptoms,
      treatmentFor,
    });
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to book appointment." });
  }
};
