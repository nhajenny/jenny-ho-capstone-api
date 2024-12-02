import express from "express";
import { getAllHotels, getHotelById, getHotelsByFestival } from "../controllers/hotels-controller.js";

const router = express.Router();

// Place specific routes before generic ones
router.get("/festival/:festivalId", getHotelsByFestival); // Matches /api/hotels/festival/:festivalId
router.get("/", getAllHotels); // Matches /api/hotels
router.get("/:id", getHotelById); // Matches /api/hotels/:id

export default router;
