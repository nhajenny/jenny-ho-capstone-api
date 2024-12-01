import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// GET all festivals
export const getAllFestivals = async (req, res) => {
    try {
      const festivals = await knex("festival").select("*");
      res.status(200).json(festivals);
    } catch (error) {
      console.error("Error fetching festivals:", error);
      res.status(500).json({ error: "Failed to fetch festivals" });
    }
  };
  
  // GET a festival by ID
  export const getFestivalById = async (req, res) => {
    const { id } = req.params;
    try {
      const festival = await knex("festival").where({ id }).first();
      if (!festival) {
        return res.status(404).json({ error: "Festival not found" });
      }
      res.status(200).json(festival);
    } catch (error) {
      console.error("Error fetching festival:", error);
      res.status(500).json({ error: "Failed to fetch festival" });
    }
  };