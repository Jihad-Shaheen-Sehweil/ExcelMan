import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Comment from "./Featues/Comment/Comment";
import Like from "./Featues/Like";
import UserInfo from "./Featues/UserInfo";
import Answer from "./Featues/Answer/Answer";
import { useEffect } from "react";

const Question = ({ question }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { user } = useAuth0();
    const navigate = useNavigate();

    const mainUser = process.env.REACT_APP_USER_ID;
    const { content, answer } = question;
    useEffect(() => {}, [user]);

    let cappedQuestion;
    if (content.length >= 45)
        cappedQuestion = content.substring(0, 45) + "  ...";
    else cappedQuestion = content + " ?";

    const handleQusetionDetailes = () => {
        navigate(`/questions/${question?.id}`);
    };

    return (
        <Box
            bg={bgColor === "backgroundLight" ? "white" : "whiteAlpha.200"}
            as="article"
            shadow="xs"
            borderRadius="3xl"
            marginY="3"
            width="60%"
            height="180px"
            padding="3"
        >
            <UserInfo user={user} question={question} />

            <Text
                className="border-b"
                display="inline-block"
                cursor="pointer"
                _hover={{ textDecorationLine: "underline" }}
                fontWeight="medium"
                onClick={handleQusetionDetailes}
            >
                {cappedQuestion}
            </Text>
            {answer && <Text paddingTop="2">{answer}</Text>}
            <Flex alignItems="center" paddingTop="5">
                <Like user={user} question={question} />
                <Comment handleComment={handleQusetionDetailes} />
                {user?.sub === mainUser && <Answer questionId={question?.id} />}
            </Flex>
        </Box>
    );
};

export default Question;
