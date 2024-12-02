import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// Get all tips - GET /api/tips
export async function getAllTips(req, res) {
    try {
        const tips = await knex("tips")
            .join("festival", "tips.festival_id", "festival.id") 
            .select(
                "tips.id",
                "tips.festival_id",
                "tips.name",
                "tips.tip",
                "tips.year_attended",
                "festival.festival_name" 
            );
        res.status(200).json(tips);
    } catch (error) {
        console.error("Error fetching tips:", error);
        res.status(500).json({ error: "Failed to fetch tips" });
    }
}

// Add a new tip - POST /api/tips
export async function createTip(req, res) {
    const { festival_id, name, tip, year_attended } = req.body;
    if (!festival_id || !name || !tip || !year_attended) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        const newTip = await knex("tips").insert({
            festival_id,
            name,
            tip,
            year_attended
        });
        res.status(201).json({ message: "Tip added successfully.", id: newTip[0] });
    } catch (error) {
        console.error("Error adding new tip:", error);
        res.status(500).json({ error: "Failed to add new tip." });
    }
}

// Update a tip - PUT /api/tips/:id
export async function updateTip(req, res) {
    const { id } = req.params;
    const { name, tip, year_attended } = req.body;

    try {
        const updated = await knex("tips")
            .where({ id })
            .update({ name, tip, year_attended });

        if (!updated) {
            return res.status(404).json({ error: "Tip not found." });
        }
        res.status(200).json({ message: "Tip updated successfully." });
    } catch (error) {
        console.error("Error updating tip:", error);
        res.status(500).json({ error: "Failed to update tip." });
    }
}
