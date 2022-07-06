import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what is your name",
        answer: "No answer yet",
        features: { likes: ["qw1"], comments: [] },
        selectedFile: "",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what old are you",
        answer: "26 years old",
        features: { likes: ["qwe2"], comments: [] },
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
            prepare(
                questionCreatorId,
                questionCreatorUsername,
                questionCreatorImg,
                content,
                selectedFile
            ) {
                return {
                    payload: {
                        questionCreatorId,
                        questionCreatorUsername,
                        questionCreatorImg,
                        id: nanoid(),
                        content,
                        answer: "No answer yet",
                        features: { likes: [], comments: [] },
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
        likeQuestion: {
            reducer(state, action) {
                const { questionId, userId } = action.payload;

                const question = state.filter(
                    (question) => question.id === questionId
                )[0];
                const index = question.features.likes.indexOf(userId);
                if (!question.features.likes.includes(userId))
                    question.features.likes.push(userId);
                else question.features.likes.splice(index, 1);
                state
                    .filter((question) => question.id !== questionId)
                    .push(question);
            },
            prepare(userId, questionId) {
                return {
                    payload: {
                        userId,
                        questionId,
                    },
                };
            },
        },
        commentQuestion: {},
    },
});

export const {
    createQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion,
    commentQuestion,
} = questionsSlice.actions;

export const selectAllQuestions = (state) => state.questions;
export const selectQuestionById = (state, questionId) =>
    state.questions.find((question) => question.id === questionId);

export default questionsSlice.reducer;
