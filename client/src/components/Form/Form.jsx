import { Button, Container, Input, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Form = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    return (
        <Container
            className="h-screen"
            paddingTop="24"
            bg={bgColor === "backgroundLight" ? "white" : "whiteAlpha.200"}
        >
            <Input placeholder="Question" />
            <Input placeholder="Image" />
            <Button>Submit</Button>
        </Container>
    );
};

export default Form;
