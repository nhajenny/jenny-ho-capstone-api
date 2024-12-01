import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration[process.env.NODE_ENV || "development"]);

// Get all festivals - GET /api/festivals
export async function getAllFestivals(req, res) {
    console.log("Fetching all festivals...");
    try {
        const data = await knex("festival").select("*");
        res.status(200).json(data);
    } catch (error) {
        console.error("Error retrieving festivals:", error);
        res.status(400).json({ message: `Error retrieving festivals` });
    }
};

// Get a festival by ID - GET /api/festivals/:id

export async function getFestivalById(req, res) {
    const festivalId = req.params.id;
    try {
        const festival = await knex("festival")
            .where({ id: festivalId })
            .first();
        if (!festival) {
            return res.status(404).json({ error: "Festival not found." });
        }
        res.status(200).json(festival);
    } catch (err) {
        console.error("Error fetching festival:", err);
        res.status(500).json({ error: "Error retrieving festival by ID" });
    }
};