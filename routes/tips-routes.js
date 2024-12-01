import express from "express";
import {
    getAllTips,
    getTipsByFestival,
    createTip,
    updateTip
} from '../controllers/tips-controller.js';

const router = express.Router();

// Get all tips
router.get("/", getAllTips);

// Get tips by festival ID
router.get("/festival/:festivalId", getTipsByFestival);

// Create a new tip
router.post("/", createTip);

// Update a tip
router.put("/:id", updateTip);

export default router;
