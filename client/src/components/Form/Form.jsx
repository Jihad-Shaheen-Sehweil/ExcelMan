import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
    createQuestion,
    editQuestion,
    selectQuestionById,
} from "../../app/sliceReducers/questionsSlice";
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { questionId } = useParams();
    const { user } = useAuth0();

    let question = useSelector((state) =>
        selectQuestionById(state, questionId)
    );
    if (!question) question = null;

    const [questionData, setQuestionData] = useState({
        content: "",
        selectedFile: "",
    });
    useEffect(() => {
        if (question) setQuestionData(question);
    }, [question]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (questionId) {
            dispatch(editQuestion({ questionData }));
        } else {
            dispatch(
                createQuestion(
                    user.sub,
                    user.nickname,
                    user.picture,
                    questionData.content,
                    questionData.selectedFile
                )
            );
        }
        handleClear();
        navigate("/home");
    };
    const handleClear = () => {
        setQuestionData({
            content: "",
            selectedFile: "",
        });
    };
    return (
        <Container className="h-screen" paddingTop="24" textAlign="center">
            <Heading as="h3" size="md" paddingBottom="6">
                {questionId ? "Edit" : "Create"} a question
            </Heading>
            <form onSubmit={handleSubmit}>
                <Textarea
                    placeholder="What is your Question?"
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.100"
                    }
                    value={questionData.content}
                    onChange={(e) =>
                        setQuestionData({
                            ...questionData,
                            content: e.target.value,
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

export default Form;
