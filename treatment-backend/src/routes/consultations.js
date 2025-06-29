import express from "express";
import { createConsultation } from "../controllers/consultationsController.js";

const router = express.Router();

router.post("/", createConsultation);

export default router;
