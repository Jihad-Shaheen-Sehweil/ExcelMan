import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import Comments from "./Featues/Comments";
import Like from "./Featues/Like";

import UserInfo from "./Featues/UserInfo";

const Question = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    return (
        <Box
            bg={bgColor === "backgroundLight" ? "white" : "whiteAlpha.200"}
            as="article"
            shadow="xs"
            borderRadius="3xl"
            marginY="3"
            width="60%"
            padding="3"
        >
            <UserInfo />
            <Text fontWeight="medium" className="border-b">
                Question
            </Text>
            <Text paddingTop="2">The Answer</Text>
            <Flex alignItems="center" paddingTop="5">
                <Like />
                <Comments />
            </Flex>
        </Box>
    );
};

export default Question;
