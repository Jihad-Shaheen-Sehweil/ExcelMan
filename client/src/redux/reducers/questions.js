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
} from "./../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { isLoading: true, questions: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };

        case END_LOADING:
            return { ...state, isLoading: false };

        case FETCH_ALL:
            return {
                ...state,
                questions: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };

        case FETCH_QUESTION:
            return {
                ...state,
                post: action.payload,
            };

        case FETCH_BY_SEARCH:
            return {
                ...state,
                questions: action.payload,
            };

        case CREATE:
            return {
                ...state,
                questions: [...state.questions, action.payload],
            };

        case UPDATE:
        case LIKE:
            return {
                ...state,
                questions: state.questions.map((post) =>
                    post._id === action.payload._id ? action.payload : post
                ),
            };

        case DELETE:
            return {
                ...state,
                questions: state.questions.filter(
                    (post) => post._id !== action.payload
                ),
            };

        default:
            return state;
    }
};
