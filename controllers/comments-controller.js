import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration[process.env.NODE_ENV || "development"]);

// Get all comments for a specific festival - GET /api/festivals/:festivalId/comments
export async function getCommentsByFestival(req, res) {
    const { festivalId } = req.params;
    try {
        const comments = await knex("comments").where({ festival_id: festivalId });
        if (comments.length === 0) {
            return res.status(404).json({ error: "No comments found for this festival." });
        }
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Error retrieving comments." });
    }
}

// Add a comment to a specific festival - POST /api/festivals/:festivalId/comments
export async function addComment(req, res) {
    const { festivalId } = req.params;
    const { name, comment, rating } = req.body;

    if (!name || !comment || !rating) {
        return res.status(400).json({ error: "Name, comment, and rating are required." });
    }

    try {
        const [newCommentId] = await knex("comments").insert({
            festival_id: festivalId,
            name,
            comment,
            rating,
        });

        const newComment = await knex("comments").where({ id: newCommentId }).first();
        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Error adding comment." });
    }
}

// Update a specific comment by ID - PUT /api/festivals/:festivalId/comments/:commentId
export async function updateComment(req, res) {
    const { festivalId, commentId } = req.params;
    const { name, comment, rating } = req.body;

    try {
        const updatedRows = await knex("comments")
            .where({ id: commentId, festival_id: festivalId })
            .update({ name, comment, rating });

        if (updatedRows === 0) {
            return res.status(404).json({ error: "Comment not found or not associated with the festival." });
        }

        const updatedComment = await knex("comments").where({ id: commentId }).first();
        res.status(200).json(updatedComment);
    } catch (error) {
        console.error("Error updating comment:", error);
        res.status(500).json({ error: "Error updating comment." });
    }
}
