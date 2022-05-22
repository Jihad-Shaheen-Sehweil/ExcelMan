import { Box } from "@chakra-ui/react";
import React from "react";

import Bannar from "./Header/Bannar";
import Questions from "./Question/Questions";

const Home = () => {
    return (
        <Box>
            <Bannar />
            <div className="px-10 pd-10 ">
                <Questions />
            </div>
        </Box>
    );
};

export default Home;
