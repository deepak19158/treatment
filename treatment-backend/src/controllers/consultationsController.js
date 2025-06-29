import Consultation from "../models/consultation.js";

export const createConsultation = async (req, res) => {
  try {
    const consultation = new Consultation(req.body);
    await consultation.save();
    res.status(201).json({ message: "Consultation saved successfully." });
  } catch (error) {
    res.status(500).json({ message: "Error saving consultation.", error });
  }
};
