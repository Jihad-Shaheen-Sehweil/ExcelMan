import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import Comments from "./Featues/Comments";
import Like from "./Featues/Like";
import UserInfo from "./Featues/UserInfo";
import user from "../../app/dummyUser";

const Question = ({ question }) => {
    const { content, answer } = question;
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    // const user = JSON.parse(localStorage.getItem("profile"));

    const navigate = useNavigate();

    const handleQusetionDetailes = () => {
        navigate(`/questions/${question?._id}`);
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
                fontWeight="medium"
                className="border-b"
                onClick={handleQusetionDetailes}
                cursor="pointer"
                _hover={{ textDecorationLine: "underline" }}
                display="inline-block"
            >
                {content}
            </Text>
            {answer && <Text paddingTop="2">{answer}</Text>}
            <Flex alignItems="center" paddingTop="5">
                <Like />
                <Comments />
            </Flex>
        </Box>
    );
};

export default Question;
