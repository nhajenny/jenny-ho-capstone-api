import express from "express";
import {
    getCommentsByFestival,
    addComment,
    updateComment,
} from "../controllers/comments-controller.js";

const router = express.Router();

// Get all comments for a specific festival
router.get("/:festivalId/comments", getCommentsByFestival);

// Add a comment to a specific festival
router.post("/:festivalId/comments", addComment);

// Update a specific comment by ID
router.put("/:festivalId/comments/:commentId", updateComment);

export default router;
