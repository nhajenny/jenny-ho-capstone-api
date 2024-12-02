import express from "express";
import {
    getAllTips,
    createTip,
    updateTip
} from '../controllers/tips-controller.js';

const router = express.Router();

// Get all tips
router.get("/", getAllTips);

// Create a new tip
router.post("/", createTip);

// Update a tip
router.put("/:id", updateTip);

export default router;
