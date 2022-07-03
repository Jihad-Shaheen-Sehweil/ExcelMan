import { createSlice } from "@reduxjs/toolkit";

const initialState = { Loading: false };
export const loadingSlice = createSlice({
    name: "Loading",
    initialState,
    reducers: {
        startLoading: (state) => {
            state.Loading = true;
        },
        endLoading: (state) => {
            state.Loading = false;
        },
    },
});

export const { startLoading, endLoading } = loadingSlice.actions;

export const selectLoadingState = (state) => state.isLoading.Loading;

export default loadingSlice.reducer;
