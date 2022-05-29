import { Box, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getQuestion } from "../../redux/actions/questions";

const QuestionDetailes = () => {
    const { question, questions, isLoading } = useSelector(
        (state) => state.questions
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getQuestion(id));
    }, [id, dispatch]);

    const openPost = (_id) => navigate(`/posts/${_id}`);

    if (isLoading) {
        return (
            <Box>
                <Spinner />
            </Box>
        );
    } else {
        return (
            <Box className="h-screen" paddingX="10" paddingTop="24">
                <Text>{question?.title}</Text>
                <Text>{question?.question}</Text>
            </Box>
        );
    }
};

export default QuestionDetailes;
