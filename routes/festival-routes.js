import express from "express";
import { getAllFestivals, getFestivalById } from '../controllers/festival-controller.js'

const router = express.Router();

// Route to get all festivals
router.get("/", getAllFestivals);

// Route to get a single festival by ID
router.get("/:id", getFestivalById);

export default router;
