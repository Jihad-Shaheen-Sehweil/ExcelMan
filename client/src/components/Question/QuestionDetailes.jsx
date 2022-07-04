import { Container, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// import { getQuestion } from "../../redux/actions/questions";

const QuestionDetailes = () => {
    const dispatch = useDispatch();
    const { question, isLoading } = useSelector((state) => console.log(state));
    const { id } = useParams();

    useEffect(() => {
        // dispatch(getQuestion(id));
    }, [dispatch, id]);

    console.log(question);

    return isLoading ? (
        <Spinner />
    ) : (
        <Container className="h-screen" paddingTop="24">
            <Text>{question?.name}</Text>
        </Container>
    );
};

export default QuestionDetailes;
