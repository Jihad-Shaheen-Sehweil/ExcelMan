import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import {
    Box,
    Button,
    Container,
    Flex,
    FormControl,
    Heading,
    Input,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { createQuestion, updateQuestion } from "../../redux/actions/questions";

const Form = ({ currentId, setCurrentId }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const dispatch = useDispatch();
    const [questionData, setQuestionData] = useState({
        title: "",
        question: "",
        selectedFile: "",
    });
    const question = useSelector((state) =>
        currentId
            ? state.questions.find((question) => question._id === currentId)
            : null
    );
    const user = JSON.parse(localStorage.getItem("profile"));

    useEffect(() => {
        if (question) setQuestionData(question);
    }, [question]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(
                updateQuestion(currentId, {
                    ...questionData,
                    name: user?.result?.name,
                })
            );
        } else {
            dispatch(
                createQuestion({ ...questionData, name: user?.result?.name })
            );
        }
        handleClear();
    };
    const handleClear = () => {
        setCurrentId(null);
        setQuestionData({
            title: "",
            question: "",
            selectedFile: "",
        });
    };
    return (
        <Container
            className="h-screen"
            paddingTop="24"
            textAlign="center"
        >
            <Heading as="h3" size="md" paddingBottom="6">
                {currentId ? "Editing" : "Creating"} a question
            </Heading>
            <FormControl onSubmit={handleSubmit}>
                <Input
                    placeholder="Title"
                    marginBottom="6"
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.100"
                    }
                    value={questionData.title}
                    onChange={(e) =>
                        setQuestionData({
                            ...questionData,
                            title: e.target.value,
                        })
                    }
                />
                <Textarea
                    placeholder="What is your Question?"
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.100"
                    }
                    value={questionData.question}
                    onChange={(e) =>
                        setQuestionData({
                            ...questionData,
                            question: e.target.value,
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
            </FormControl>
        </Container>
    );
};

export default Form;
