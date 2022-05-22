import React from "react";
import {
    Box,
    Flex,
    Icon,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    IoMdMoon as OutlinedMoonIcon,
    IoMdAddCircleOutline as OutlinedAddIcon,
} from "react-icons/io";
import { RiFileExcel2Fill as OutlinedExcelIcon } from "react-icons/ri";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { RiBookLine as OutlinedBookIcon } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { toggleColorMode } = useColorMode();
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
                <Link to="/">
                    <Flex
                        alignItems="center"
                        _hover={{ bg: "white", color: "black" }}
                        padding="2"
                        borderRadius="full"
                        cursor="pointer"
                    >
                        <Icon
                            paddingRight="1"
                            w={5}
                            h={5}
                            as={OutlinedExcelIcon}
                        />
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
                <Link to="/auth">
                    <Text
                        fontWeight="semibold"
                        _hover={{ bg: "white", color: "black" }}
                        padding="2"
                        borderRadius="full"
                        cursor="pointer"
                    >
                        Sign In
                    </Text>
                </Link>

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
            </Flex>
        </Box>
    );
};
export default Navbar;
