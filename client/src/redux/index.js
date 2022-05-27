import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import questions from "./reducers/questions";

const store = configureStore({
    reducer: {
        auth,
        questions,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export default store;
