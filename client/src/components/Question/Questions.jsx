import { Box, Text } from "@chakra-ui/react";
import React from "react";

import Question from "./Question";

const Questions = () => {
    return (
        <Box>
            <Text fontSize="2xl" fontWeight="extrabold" marginTop="5">
                Questions
            </Text>
            <Question />
            <Question />
        </Box>
    );
};

export default Questions;
