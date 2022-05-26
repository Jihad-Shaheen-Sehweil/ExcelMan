import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    title: String,
    question: String,
    name: String,
    creator: String,
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: { type: Date, default: new Date() },
});

export default mongoose.model("QuestionModel", questionSchema);
