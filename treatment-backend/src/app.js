import express from "express";
import cors from "cors";
import connectDB from "./db/index.js";
import bookingsRouter from "./routes/bookings.js";
import consultationsRouter from "./routes/consultations.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/bookings", bookingsRouter);
app.use("/api/consultations", consultationsRouter);

app.get("/", (req, res) => {
  res.send("Treatment Backend API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
