import React from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Question from "./Question";
import { selectAllQuestions } from "../../app/sliceReducers/questionsSlice";
import { selectLoadingState } from "../../app/sliceReducers/loadingSlice";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Questions = () => {
    const questions = useSelector(selectAllQuestions);
    const isLoading = useSelector(selectLoadingState);
    const orderedQuestions = questions
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    const query = useQuery();
    const page = query.get("page") || 1;
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (page) dispatch(getQuestions(page));
    // }, [page, dispatch]);

    if (!questions?.length && !isLoading) return "No Questions";

    return isLoading ? (
        <Spinner />
    ) : (
        <Box>
            <Text fontSize="2xl" fontWeight="extrabold" marginTop="5">
                Questions
            </Text>
            {orderedQuestions.map((question) => (
                <Box key={question.id}>
                    <Question question={question} />
                </Box>
            ))}
        </Box>
    );
};

export default Questions;
