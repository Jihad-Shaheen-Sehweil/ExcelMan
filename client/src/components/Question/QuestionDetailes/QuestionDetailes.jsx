import { useAuth0 } from "@auth0/auth0-react";
import {
    Box,
    Container,
    Flex,
    Image,
    Spacer,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectQuestionById } from "../../../app/sliceReducers/questionsSlice";
import UserInfo from "../Featues/UserInfo";
import Comments from "../Featues/Comment/Comment";
import Like from "../Featues/Like";
import Back from "./Back";
import Comment from "../Featues/Comment/Comment";
import CommentInput from "../Featues/Comment/CommentInput";
import CommentSection from "../Featues/Comment/CommentSection";

const QuestionDetailes = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { id } = useParams();
    const { user } = useAuth0();

    const question = useSelector((state) => selectQuestionById(state, id));
    const {
        answer,
        content,
        features,
        // id: questionId,
        questionCreatorId,
        questionCreatorUsername,
        selectedFile,
    } = question;

    return (
        <Box
            as="article"
            bg={bgColor === "backgroundLight" ? "white" : "whiteAlpha.200"}
            className="h-screen"
            width="60%"
            shadow="xs"
            borderRadius="3xl"
            marginTop="16"
            marginBottom="3"
            marginX="auto"
            paddingY="4"
            paddingX="5"
        >
            <Back />
            <UserInfo question={question} user={user} />

            <Box paddingY="4">
                <Text paddingBottom="2" fontWeight="bold">
                    Question:
                </Text>
                <Text paddingX="5" paddingBottom="4">
                    {content}
                </Text>

                <Text paddingBottom="2" fontWeight="bold">
                    Answer:
                </Text>
                <Text paddingX="5">{answer}</Text>
            </Box>

            <Image src={selectedFile} />

            <Flex>
                <Like question={question} user={user} />
                <Comment />
            </Flex>

            <Text paddingY="4" fontWeight="bold">
                Comments
            </Text>

            <CommentInput />
            <CommentSection />
        </Box>
    );
};

export default QuestionDetailes;
