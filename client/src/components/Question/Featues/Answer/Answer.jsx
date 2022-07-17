import { Box, Icon, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Answer = ({ questionId }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const navigate = useNavigate();

    const handleAnswer = () => {
        navigate(`/questions/answer/${questionId}`);
    };

    return (
        <Box cursor="pointer">
            <Icon
                className="hover:text-red-600"
                color={bgColor === "backgroundLight" ? "black" : "white"}
                w={6}
                h={6}
                as={RiQuestionAnswerLine}
                onClick={handleAnswer}
            />
        </Box>
    );
};

export default Answer;
