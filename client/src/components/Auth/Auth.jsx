import { useAuth0 } from "@auth0/auth0-react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();

    const backHome = () => {
        navigate("/");
    };

    // do the theme coloring in this jsx
    return (
        <Center className=" h-screen w-screen">
            <Flex flexDirection="column">
                <Text paddingBottom="3">You are not Logged in</Text>
                <Button
                    bg="primary"
                    marginBottom="3"
                    onClick={loginWithRedirect}
                >
                    Sign Up
                </Button>
                <Button
                    bgColor="blue.600"
                    color="whiteAlpha.900"
                    onClick={backHome}
                >
                    Home
                </Button>
            </Flex>
        </Center>
    );
};

export default Auth;
