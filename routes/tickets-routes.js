import express from "express";
import { getAllTickets, getTicketById, getTicketsByFestivalId } from '../controllers/tickets-controller.js';

const router = express.Router();

router.get("/", getAllTickets); 
router.get("/festivals/:festivalId/tickets", getTicketsByFestivalId);
router.get("/:id", getTicketById); 

export default router;
