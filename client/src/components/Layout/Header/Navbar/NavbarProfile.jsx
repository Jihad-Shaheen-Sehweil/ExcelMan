import React from "react";
import {
    Avatar,
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
import { IoMdMoon as OutlinedMoonIcon } from "react-icons/io";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { FaUserEdit as EditProfile } from "react-icons/fa";
import { CgLogOff as LogoutIcon } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const NavbarProfile = () => {
    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    const { logout, isAuthenticated, user } = useAuth0();

    return (
        <>
            {isAuthenticated && (
                <Menu>
                    <MenuButton
                        bg="primary"
                        as={IconButton}
                        borderRadius="full"
                        icon={<Avatar size="sm" src={user.picture} />}
                    />
                    <MenuList
                        bg={
                            bgColor === "backgroundLight"
                                ? "white"
                                : "backgroundDark"
                        }
                        color={
                            bgColor === "backgroundLight" ? "black" : "white"
                        }
                    >
                        <MenuItem onClick={logout}>
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
            )}
        </>
    );
};

export default NavbarProfile;
