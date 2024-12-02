import express from "express";
import { getAllHotels, getHotelById, getHotelsByFestival } from '../controllers/hotels-controller.js';

const router = express.Router();

// Get all hotels
router.get("/", getAllHotels);

// Get hotels by festival ID
router.get("/festivals/:festivalId/hotel", getHotelsByFestival)

// Get a hotel by ID
router.get("/:id", getHotelById);


export default router;
