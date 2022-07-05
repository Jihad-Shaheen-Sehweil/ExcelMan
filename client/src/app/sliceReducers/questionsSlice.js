import { createSlice, current, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what is your name",
        answer: "",
        features: { likes: [], comments: [] },
        selectedFile: "",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        questionCreatorId: "0",
        questionCreatorUsername: "JS2000",
        content: "what old are you",
        answer: "26 years old",
        features: { likes: [], comments: [] },
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
                        answer: "",
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
                console.log(current(state));

                // return state.filter((question) =>
                //     question.id === questionId
                //         ? !question.features.likes.includes(userId) &&
                //           question.features.likes.push(userId)
                //         : question
                // );
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

export const { createQuestion, editQuestion, deleteQuestion, likeQuestion } =
    questionsSlice.actions;

export const selectAllQuestions = (state) => state.questions;
export const selectQuestionById = (state, questionId) =>
    state.questions.find((question) => question.id === questionId);
export const selectQuestionLikeCount = (state, questionId) =>
    state.questions.find((question) => question.id === questionId);

export default questionsSlice.reducer;
