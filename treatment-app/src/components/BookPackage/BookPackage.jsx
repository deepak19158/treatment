import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const iconMap = {
  category: (
    <svg
      className="w-5 h-5 text-indigo-500 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7V6a2 2 0 012-2h2a2 2 0 012 2v1m0 0v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7m6 0h4m0 0V6a2 2 0 012-2h2a2 2 0 012 2v1m0 0v1a2 2 0 01-2 2h-2a2 2 0 01-2-2V7m6 0h-6"
      />
    </svg>
  ),
  service: (
    <svg
      className="w-5 h-5 text-emerald-500 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z"
      />
    </svg>
  ),
  package: (
    <svg
      className="w-5 h-5 text-amber-500 mr-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7l9-4 9 4M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M4 10l8 4m0 0l8-4m-8 4v10"
      />
    </svg>
  ),
};

const BookPackage = () => {
  const { category, service, packageName } = useParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    preferredDate: "",
    preferredTime: "",
    category: category,
    service: decodeURIComponent(service),
    packageName: decodeURIComponent(packageName),
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
      const response = await fetch(`${backendUrl}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to book package.");
      }
    } catch (error) {
      alert("Error booking package.");
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Booking Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for booking the{" "}
          <span className="font-semibold">{form.packageName}</span> package.
          <br />
          We will contact you soon to confirm your appointment.
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
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Book Package</h1>
      <div className="mb-8">
        <div className="rounded-2xl shadow-lg border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {iconMap.category}
            <span className="text-gray-700 text-base font-semibold tracking-wide">
              Category:
            </span>
            <span className="ml-2 text-lg font-bold text-indigo-700 capitalize">
              {form.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {iconMap.service}
            <span className="text-gray-700 text-base font-semibold tracking-wide">
              Service:
            </span>
            <span className="ml-2 text-lg font-bold text-emerald-700">
              {form.service}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {iconMap.package}
            <span className="text-gray-700 text-base font-semibold tracking-wide">
              Package:
            </span>
            <span className="ml-2 text-lg font-bold text-amber-700">
              {form.packageName}
            </span>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Address
          </label>
          <textarea
            name="address"
            value={form.address}
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
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookPackage;
