import express from "express";
import { getAllTickets, getTicketById } from '../controllers/tickets-controller.js';

const router = express.Router();

router.get("/", getAllTickets); 
router.get("/festival/:festivalId/tickets", getTicketsByFestivalId);
router.get("/:id", getTicketById); 

export default router;
