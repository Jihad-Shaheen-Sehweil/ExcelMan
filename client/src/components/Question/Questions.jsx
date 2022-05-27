import React, { useEffect } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Question from "./Question";
import { getQuestions } from "../../redux/actions/questions";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Questions = ({ setCurrentId }) => {
    const { questions, isLoading } = useSelector((state) => state.questions);
    const query = useQuery();
    const page = query.get("page") || 1;
    const dispatch = useDispatch();

    useEffect(() => {
        if (page) dispatch(getQuestions(page));
    }, [page, dispatch]);
    
    if (!questions?.length && !isLoading) return "No Questions";

    return isLoading ? (
        <Spinner />
    ) : (
        <Box>
            <Text fontSize="2xl" fontWeight="extrabold" marginTop="5">
                Questions
            </Text>
            {questions.map((question) => (
                <Box key={question._id}>
                    <Question question={question} setCurrentId={setCurrentId} />
                </Box>
            ))}
        </Box>
    );
};

export default Questions;
