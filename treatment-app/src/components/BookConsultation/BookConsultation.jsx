import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookConsultation = ({ open, onClose, isPersonalAppointment }) => {
  const { treatmentName } = useParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    symptoms: "",
    treatment: treatmentName ? decodeURIComponent(treatmentName) : "",
    treatmentFor: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/api/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to book consultation.");
      }
    } catch (error) {
      alert("Error booking consultation.");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Consultation Booked!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for booking a consultation
          {form.treatment && ` for ${form.treatment}`}.<br />
          Our doctor will contact you soon.
        </p>
        <button
          className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {isPersonalAppointment
          ? "Book Personal Appointment"
          : "Book Consultation"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isPersonalAppointment && (
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Treatment For <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="treatmentFor"
              value={form.treatmentFor}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="What do you want treatment for?"
            />
          </div>
        )}
        {form.treatment && (
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Treatment
            </label>
            <input
              type="text"
              name="treatment"
              value={form.treatment}
              readOnly
              className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
        )}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            pattern="[0-9]{10,}"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-medium mb-1">
              Preferred Time
            </label>
            <input
              type="time"
              name="preferredTime"
              value={form.preferredTime}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Symptoms / Notes
          </label>
          <textarea
            name="symptoms"
            value={form.symptoms}
            onChange={handleChange}
            placeholder="Describe your symptoms or concerns"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
        >
          Book Consultation
        </button>
      </form>
    </div>
  );
};

export default BookConsultation;
