import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FileBase from "react-file-base64";

import {
    answerQuestion,
    selectQuestionById,
} from "../../../../app/sliceReducers/questionsSlice";

const AnswerInput = ({ questionId }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let question = useSelector((state) =>
        selectQuestionById(state, questionId)
    );
    if (!question) question = null;

    const [questionData, setQuestionData] = useState({
        answer: "",
        selectedFile: "",
    });
    useEffect(() => {
        if (question) setQuestionData(question);
    }, [question]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (questionId) {
            dispatch(answerQuestion(questionId, { questionData }));
        }
        handleClear();
        navigate("/home");
    };
    const handleClear = () => {
        setQuestionData({
            answer: "",
            selectedFile: "",
        });
    };
    return (
        <Container className="h-screen" paddingTop="24" textAlign="center">
            {/* <Heading as="h3" size="md" paddingBottom="6">
                Answering a question
            </Heading> */}
            <form onSubmit={handleSubmit}>
                <Textarea
                    placeholder="Answering a question"
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.100"
                    }
                    value={questionData.answer}
                    onChange={(e) =>
                        setQuestionData({
                            ...questionData,
                            answer: e.target.value,
                        })
                    }
                />
                <Box padding="6">
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setQuestionData({
                                ...questionData,
                                selectedFile: base64,
                            })
                        }
                    />
                </Box>
                <Flex justifyContent="center">
                    <Button type="submit" variant="primary" marginRight="10">
                        Submit
                    </Button>
                    <Button
                        color="white"
                        _hover={{ bg: "#ba6d6a", color: "black" }}
                        bg="danger"
                        onClick={handleClear}
                    >
                        Clear
                    </Button>
                </Flex>
            </form>
        </Container>
    );
};

export default AnswerInput;
