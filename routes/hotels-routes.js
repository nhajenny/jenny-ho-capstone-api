import express from "express";
import { getAllHotels, getHotelById, getHotelsByFestival } from '../controllers/hotels-controller.js';

const router = express.Router();

// Get all hotels
router.get("/", getAllHotels);

// Get a hotel by ID
router.get("/:id", getHotelById);

// Get hotels by festival ID
router.get("/festival/:festivalId", getHotelsByFestival);

export default router;
