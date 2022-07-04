import { Box } from "@chakra-ui/react";
import React from "react";

import Questions from "../Question/Questions";

const Home = () => {
    return (
        <Box>
            <Box paddingX="10" paddingBottom="10">
                <Questions />
            </Box>
        </Box>
    );
};

export default Home;
