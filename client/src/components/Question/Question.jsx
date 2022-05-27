import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Comments from "./Featues/Comments";
import Like from "./Featues/Like";
import UserInfo from "./Featues/UserInfo";

const Question = ({ question, setCurrentId }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const user = JSON.parse(localStorage.getItem("profile"));

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
            <Text fontWeight="medium" className="border-b">
                {question?.title}
            </Text>
            <Text paddingTop="2">The Answer</Text>
            {user && (
                <Flex alignItems="center" paddingTop="5">
                    <Like />
                    <Comments />
                </Flex>
            )}
        </Box>
    );
};

export default Question;
