import * as api from "../../api/index";
import {
    FETCH_ALL,
    FETCH_QUESTION,
    FETCH_BY_SEARCH,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    START_LOADING,
    END_LOADING,
} from "../constants/actionTypes";

export const getQuestions = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchQuestions(page);
        const action = { type: FETCH_ALL, payload: data };
        dispatch(action);

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getQuestion = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.fetchQuestion(id);
        const action = { type: FETCH_QUESTION, payload: data };
        dispatch(action);

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const getQuestionBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const {
            data: { data },
        } = await api.fetchQuestionsBySearch(searchQuery);
        const action = { type: FETCH_BY_SEARCH, payload: data };
        dispatch(action);

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const createQuestion = (question) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });

        const { data } = await api.createQuestion(question);

        const action = { type: CREATE, payload: data };
        dispatch(action);

        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const updateQuestion = (id, question) => async (dispatch) => {
    try {
        const { data } = await api.updateQuestion(id, question);

        const action = { type: UPDATE, payload: data };
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const deleteQuestion = (id) => async (dispatch) => {
    try {
        await api.deleteQuestion(id);

        const action = { type: DELETE, payload: id };
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};

export const LikeQuestion = (id) => async (dispatch) => {
    try {
        const { data } = await api.likeQuestion(id);
        const action = { type: LIKE, payload: data };

        dispatch(action);
    } catch (error) {
        console.log(error);
    }
};
