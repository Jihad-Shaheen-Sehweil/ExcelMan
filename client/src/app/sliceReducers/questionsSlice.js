import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what is your name",
        answer: "",
        features: { likes: 0, comments: [] },
        selectedFile: "",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what old are you",
        answer: "26 years old",
        features: { likes: 0, comments: [] },
        selectedFile: "",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
];
export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        getQuestions: {},
        getQuestion: {},
        getQuestionBySearch: {},
        createQuestion: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(content, questionCreatorUsername, selectedFile) {
                return {
                    payload: {
                        id: nanoid(),
                        questionCreatorId: "0",
                        questionCreatorUsername,
                        content,
                        answer: "",
                        features: { likes: 0, comments: [] },
                        selectedFile,
                        date: new Date().toISOString(),
                    },
                };
            },
        },
        editQuestion: {
            reducer(state, action) {
                const { updatedQuestion } = action.payload;
                const { questionData } = updatedQuestion;
                const { id: questionId } = questionData;

                const questions = state.filter(
                    (question) => question.id !== questionId
                );

                return (state = [...questions, questionData]);
            },
            prepare(updatedQuestion) {
                return {
                    payload: {
                        updatedQuestion,
                    },
                };
            },
        },
        deleteQuestion: {
            reducer(state, action) {
                const { questionId } = action.payload;
                return state.filter((question) => question.id !== questionId);
            },
            prepare(questionId) {
                return {
                    payload: {
                        questionId,
                    },
                };
            },
        },
        answerQuestion: {},
        likeQuestion: {},
        commentQuestion: {},
    },
});

export const { createQuestion, editQuestion, deleteQuestion } =
    questionsSlice.actions;

export const selectAllQuestions = (state) => state.questions;
export const selectQuestionById = (state, questionId) =>
    state.questions.find((question) => question.id === questionId);

export default questionsSlice.reducer;
