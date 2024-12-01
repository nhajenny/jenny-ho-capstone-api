import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Get all tickets - GET /api/tickets
export async function getAllTickets(req, res) {
    console.log("Fetching all tickets...");
    try {
        const data = await knex("tickets").select("*");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error retrieving tickets:", error);
        res.status(400).json({ message: `Error retrieving tickets` });
    }
}

// Get a ticket by ID - GET /api/tickets/:id
export async function getTicketById(req, res) {
    const ticketId = req.params.id;
    try {
        const ticket = await knex("tickets")
            .where({ id: ticketId })
            .first();
        if (!ticket) {
            return res.status(404).json({ error: "Ticket not found." });
        }
        res.status(200).json(ticket);
    } catch (err) {
        console.error("Error fetching ticket:", err);
        res.status(500).json({ error: "Error retrieving ticket by ID" });
    }
}