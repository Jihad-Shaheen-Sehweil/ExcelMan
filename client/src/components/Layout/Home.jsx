import React from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

import Bannar from "../Layout/Header/Bannar";
import Questions from "../Question/Questions";

const Home = () => {
    const { isLoading } = useAuth0();

    if (isLoading) return <Spinner />;

    return (
        <Box>
            <Bannar />
            <Box paddingX="10" paddingBottom="10">
                <Questions />
            </Box>
        </Box>
    );
};

export default Home;
