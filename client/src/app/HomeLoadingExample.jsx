import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    startLoading,
    endLoading,
    selectLoadingState,
} from "./sliceReducers/loadingSlice";
import Bannar from "./Header/Bannar";
import Questions from "./Question/Questions";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoadingState);

    return (
        <Box>
            <Bannar />
            <Box paddingX="10" paddingBottom="10">
                <button onClick={() => dispatch(startLoading())}>
                    Start Loading
                </button>
                <button onClick={() => dispatch(endLoading())}>
                    End Loading
                </button>
                {/* <Questions /> */}
            </Box>
        </Box>
    );
};

export default Home;
