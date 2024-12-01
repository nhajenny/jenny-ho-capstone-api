import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Get all hotels - GET /api/hotels
export async function getAllHotels(req, res) {
    try {
        const hotels = await knex("hotels").select("*");
        res.status(200).json(hotels);
    } catch (error) {
        console.error("Error fetching hotels:", error);
        res.status(500).json({ error: "Failed to fetch hotels" });
    }
}

// Get a hotel by ID - GET /api/hotels/:id
export async function getHotelById(req, res) {
    const { id } = req.params;
    try {
        const hotel = await knex("hotels").where({ id }).first();
        if (!hotel) {
            return res.status(404).json({ error: "Hotel not found." });
        }
        res.status(200).json(hotel);
    } catch (error) {
        console.error("Error fetching hotel:", error);
        res.status(500).json({ error: "Failed to fetch hotel" });
    }
}

// Get hotels by festival ID - GET /api/festivals/:festivalId/hotels
export async function getHotelsByFestival(req, res) {
    const { festivalId } = req.params;
    try {
        const hotels = await knex("hotels").where({ festival_id: festivalId });
        if (hotels.length === 0) {
            return res.status(404).json({ error: "No hotels found for this festival." });
        }
        res.status(200).json(hotels);
    } catch (error) {
        console.error("Error fetching hotels by festival:", error);
        res.status(500).json({ error: "Failed to fetch hotels for the festival" });
    }
}
