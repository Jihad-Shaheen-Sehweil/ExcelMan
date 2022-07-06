import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Back = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/");
    };
    return (
        <Flex alignItems="center" paddingBottom="3">
            <Icon
                className=" rounded-full p-2 hover:bg-green-600"
                color={bgColor === "backgroundLight" ? "black" : "white"}
                _hover={{ bg: "primary", color: "white" }}
                w={9}
                h={9}
                as={AiOutlineArrowLeft}
                onClick={handleBackHome}
                cursor="pointer"
            />
            <Text paddingLeft="3" fontWeight="extrabold">
                Question
            </Text>
        </Flex>
    );
};

export default Back;
