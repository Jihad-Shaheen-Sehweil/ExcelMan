import React from "react";
import { Box, Flex, Icon, Text, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    RiFileExcel2Fill as OutlinedExcelIcon,
    RiBookLine as OutlinedBookIcon,
} from "react-icons/ri";
import {
    IoMdAddCircleOutline as OutlinedAddIcon,
    IoMdMoon as OutlinedMoonIcon,
} from "react-icons/io";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarIcons = () => {
    const { toggleColorMode } = useColorMode();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleSignUp = () => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
    };

    return (
        <>
            <Link to="/home">
                <Flex
                    alignItems="center"
                    _hover={{ bg: "white", color: "black" }}
                    padding="2"
                    borderRadius="full"
                    cursor="pointer"
                >
                    <Icon paddingRight="1" w={5} h={5} as={OutlinedExcelIcon} />
                    <Text fontWeight="semibold">ExcelMan</Text>
                </Flex>
            </Link>
            <Link to="/lessons">
                <Box>
                    <Icon
                        _hover={{ bg: "white", color: "black" }}
                        padding="2"
                        borderRadius="full"
                        cursor="pointer"
                        color="white"
                        w={9}
                        h={9}
                        as={OutlinedBookIcon}
                    />
                </Box>
            </Link>
            {isAuthenticated ? (
                <Link to="/form">
                    <Box>
                        <Icon
                            _hover={{ bg: "white", color: "black" }}
                            padding="2"
                            borderRadius="full"
                            cursor="pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedAddIcon}
                        />
                    </Box>
                </Link>
            ) : (
                <>
                    <Text
                        fontWeight="semibold"
                        _hover={{ bg: "white", color: "black" }}
                        padding="2"
                        borderRadius="full"
                        cursor="pointer"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Text>
                    <Flex>
                        <Box>
                            <Icon
                                fontWeight="semibold"
                                _hover={{ bg: "white", color: "black" }}
                                padding="2"
                                borderRadius="full"
                                cursor="pointer"
                                color="white"
                                w={9}
                                h={9}
                                as={OutlinedLanguageIcon}
                            />
                        </Box>

                        <Box>
                            <Icon
                                fontWeight="semibold"
                                _hover={{ bg: "white", color: "black" }}
                                padding="2"
                                borderRadius="full"
                                cursor="pointer"
                                color="white"
                                w={9}
                                h={9}
                                as={OutlinedMoonIcon}
                                onClick={toggleColorMode}
                                transform="ease-out"
                                transition
                                transitionDelay="150ms"
                                // className="transition ease-in-out delay-150"
                            />
                        </Box>
                    </Flex>
                </>
            )}
        </>
    );
};

export default NavbarIcons