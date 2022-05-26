import mongoose from "mongoose";

import QuestionModel from "../models/questionModel.js";

export const getQuestions = async (req, res) => {
    const { page } = req.query;

    try {
        const LIMIT = 5;
        const startIndex = (Number(page) - 1) * LIMIT;
        const total = await QuestionModel.countDocuments({});

        const questions = await QuestionModel.find()
            .sort({ _id: -1 })
            .limit(LIMIT)
            .skip(startIndex);

        return res.status(200).json({
            data: questions,
            currentPage: Number(page),
            numberOfPages: Math.ceil(total / LIMIT),
        });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
export const getQuestion = async (req, res) => {
    const { id } = req.params;

    try {
        const question = await QuestionModel.findById(id);

        return res.status(200).json(question);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
export const getQuestionBySearch = async (req, res) => {
    const { searchQuery } = req.query;

    try {
        const title = new RegExp(searchQuery, "i");
        const questions = await QuestionModel.find({
            $or: [{ title }],
        });

        return res.status(200).json({ data: questions });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
export const createQuestion = async (req, res) => {
    const question = req.body;
    const newQuestion = new QuestionModel({
        ...question,
        creator: req.userId,
        createdAt: new Date().toISOString(),
    });

    try {
        await newQuestion.save();

        return res.status(200).json(newQuestion);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};
export const updateQuestion = async (req, res) => {
    const { id: _id } = req.params;
    const question = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with that id");

    const updatedQuestion = await QuestionModel.findByIdAndUpdate(
        _id,
        question,
        { new: true }
    );

    return res.json(updateQuestion);
};
export const deleteQuestion = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No post with that id");

    await QuestionModel.findOneAndRemove(id);

    return res.json({ message: "Post deleted successfuly" });
};
export const likeQuestoin = async (req, res) => {};
