import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Question from "./Question";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Questions = () => {
    const { questions, isLoading } = useSelector((state) => state.questions);
    const query = useQuery();
    const page = query.get("page") || 1;

    if (!questions?.length && !isLoading) return "No Questions";

    return isLoading ? (
        <Spinner />
    ) : (
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
