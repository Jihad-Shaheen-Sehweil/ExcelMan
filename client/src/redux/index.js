import { configureStore } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import questions from "./reducers/questions";

const store = configureStore({
    reducer: {
        auth,
        questions,
    },
});

export default store;
