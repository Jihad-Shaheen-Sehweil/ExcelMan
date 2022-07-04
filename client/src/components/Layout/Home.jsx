import React from "react";
import { Box } from "@chakra-ui/react";

import Bannar from "../Layout/Header/Bannar";
import Questions from "../Question/Questions";

const Home = () => {
    return (
        <Box>
            <Bannar />
            <Box paddingX="10" paddingBottom="10">
                <Questions />
            </Box>
        </Box>
    );
};

export default Home;
