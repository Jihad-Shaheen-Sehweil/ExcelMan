import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import AnswerInput from "./AnswerInput";

const AnswerForm = () => {
    const mainUser = process.env.REACT_APP_USER_ID;
    const { user } = useAuth0();
    const { id } = useParams();

    if (user?.sub === mainUser) {
        return (
            <Box>
                <AnswerInput questionId={id} />
            </Box>
        );
    } else {
        return (
            <Box>
                <Text>Your not authorized to answer this question</Text>
            </Box>
        );
    }
};

export default AnswerForm;
