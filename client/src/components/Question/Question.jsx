import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Comments from "./Featues/Comments";
import Like from "./Featues/Like";

import UserInfo from "./Featues/UserInfo";

const Question = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    return (
        <Box bg={bgColor === "backgroundLight" ? "white" : "whiteAlpha.200"} as="article" className="border border-gray-300 my-3 w-6/12 p-3">
            <UserInfo />
            <p className="font-medium border-b">Question</p>
            <p className="pt-2">The Answer</p>
            <section className="flex items-center pt-5">
                <Like />
                <Comments />
            </section>
        </Box>
    );
};

export default Question;
