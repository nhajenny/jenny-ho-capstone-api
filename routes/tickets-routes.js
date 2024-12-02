import express from "express";
import { getAllTickets, getTicketById, getTicketsByFestivalId } from "../controllers/tickets-controller.js";

const router = express.Router();

// Place specific routes before generic ones
router.get("/festival/:festivalId", getTicketsByFestivalId); // Matches /api/tickets/festival/:festivalId
router.get("/", getAllTickets); // Matches /api/tickets
router.get("/:id", getTicketById); // Matches /api/tickets/:id

export default router;
