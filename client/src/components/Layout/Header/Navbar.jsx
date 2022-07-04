import React, { useEffect, useState } from "react";
import {
    Avatar,
    Box,
    Flex,
    Icon,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import {
    IoMdMoon as OutlinedMoonIcon,
    IoMdAddCircleOutline as OutlinedAddIcon,
} from "react-icons/io";
import {
    RiFileExcel2Fill as OutlinedExcelIcon,
    RiBookLine as OutlinedBookIcon,
} from "react-icons/ri";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { FaUserEdit as EditProfile } from "react-icons/fa";
import { CgLogOff as LogoutIcon } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { useAuth0 } from "@auth0/auth0-react";

import user from "../../../app/dummyUser";

const Navbar = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const { logout, isAuthenticated } = useAuth0();

    // const [user, setUser] = useState(
    //     JSON.parse(localStorage.getItem("profile"))
    // );

    // useEffect(() => {
    //     const token = user?.token;

    //     if (token) {
    //         const decodedToken = decode(token);

    //         if (decodedToken.exp * 1000 < new Date().getTime()) handleLogout();
    //     }

    //     setUser(JSON.parse(localStorage.getItem("profile")));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [location, user]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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
                <Link to="/home">
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
                {user && (
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
                )}
                {user ? (
                    <Menu>
                        <MenuButton
                            bg="primary"
                            as={IconButton}
                            borderRadius="full"
                            icon={<Avatar size="sm" />}
                        />
                        <MenuList
                            bg={
                                bgColor === "backgroundLight"
                                    ? "white"
                                    : "backgroundDark"
                            }
                            color={
                                bgColor === "backgroundLight"
                                    ? "black"
                                    : "white"
                            }
                        >
                            <MenuItem onClick={handleLogout}>
                                <Flex alignItems="center">
                                    <Icon
                                        as={LogoutIcon}
                                        fontWeight="semibold"
                                        padding="2"
                                        borderRadius="full"
                                        cursor="pointer"
                                        color={
                                            bgColor === "backgroundLight"
                                                ? "black"
                                                : "white"
                                        }
                                        w={9}
                                        h={9}
                                    />
                                    <Text>Log Out</Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem>
                                <Link to="/profile">
                                    <Flex alignItems="center">
                                        <Icon
                                            as={EditProfile}
                                            fontWeight="semibold"
                                            padding="2"
                                            cursor="pointer"
                                            color={
                                                bgColor === "backgroundLight"
                                                    ? "black"
                                                    : "white"
                                            }
                                            w={9}
                                            h={9}
                                        />
                                        <Text>Profile</Text>
                                    </Flex>
                                </Link>
                            </MenuItem>
                            <MenuItem>
                                <Flex alignItems="center">
                                    <Icon
                                        fontWeight="semibold"
                                        padding="2"
                                        borderRadius="full"
                                        cursor="pointer"
                                        color={
                                            bgColor === "backgroundLight"
                                                ? "black"
                                                : "white"
                                        }
                                        w={9}
                                        h={9}
                                        as={OutlinedLanguageIcon}
                                    />
                                    <Text>Change Language</Text>
                                </Flex>
                            </MenuItem>
                            <MenuItem onClick={toggleColorMode}>
                                <Flex alignItems="center">
                                    <Icon
                                        fontWeight="semibold"
                                        padding="2"
                                        borderRadius="full"
                                        cursor="pointer"
                                        color={
                                            bgColor === "backgroundLight"
                                                ? "black"
                                                : "white"
                                        }
                                        w={9}
                                        h={9}
                                        as={OutlinedMoonIcon}
                                        transform="ease-out"
                                        transition
                                        transitionDelay="150ms"
                                        // className="transition ease-in-out delay-150"
                                    />
                                    <Text>Change Theme</Text>
                                </Flex>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
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
                )}
                {!user && (
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
                )}
            </Flex>
        </Box>
    );
};
export default Navbar;
