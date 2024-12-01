import express from "express";
import { getAllTickets, getTicketById } from '../controllers/tickets-controller.js';

const router = express.Router();

router.get("/", getAllTickets); // Route for all tickets
router.get("/:id", getTicketById); // Route for ticket by ID

export default router;
