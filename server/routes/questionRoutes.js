import express from "express";

import {
    getQuestions,
    getQuestion,
    getQuestionBySearch,
    createQuestion,
    updateQuestion,
    deleteQuestion,
    likeQuestoin,
} from "../controllers/questions.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getQuestions);
router.get("/:id", getQuestion);
router.get("/search", getQuestionBySearch);
router.post("/", auth, createQuestion);
router.patch("/:id", auth, updateQuestion);
router.delete("/:id", auth, deleteQuestion);
router.patch("/:id", auth, likeQuestoin);

export default router;
