import React from "react";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";

import NavbarProfile from "./NavbarProfile";
import NavbarIcons from "./NavbarIcons";

const Navbar = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    return (
        <Box as="nav">
            <Flex
                bg={
                    bgColor === "backgroundLight" ? "primary" : "backgroundDark"
                }
                width="full"
                justify="space-between"
                alignItems="center"
                position="fixed"
                height="3.5rem"
                paddingX="10"
                textColor="white"
            >
                <NavbarIcons />
                <NavbarProfile />
            </Flex>
        </Box>
    );
};
export default Navbar;
