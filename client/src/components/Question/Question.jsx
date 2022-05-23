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
            // border="1px"
            // borderColor="gray.300"
            // marginY="3"
            // width="50%"
            // padding="3"
            className="border border-gray-300 my-3 w-6/12 p-3"
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
