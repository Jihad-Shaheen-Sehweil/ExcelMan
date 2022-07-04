import { configureStore } from "@reduxjs/toolkit";

import loadingSlice from "./sliceReducers/loadingSlice";
import questionsSlice from "./sliceReducers/questionsSlice";

export const store = configureStore({
    reducer: {
        isLoading: loadingSlice,
        questions: questionsSlice,
    },
});
