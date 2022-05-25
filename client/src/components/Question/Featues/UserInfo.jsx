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
    useColorModeValue,
} from "@chakra-ui/react";
import { BsDot as DotIcon, BsThreeDots as optionIcon } from "react-icons/bs";
import { BiEdit as EditIcon } from "react-icons/bi";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";

const UserInfo = () => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    return (
        <Flex
            as="section"
            justifyContent="space-between"
            alignItems="center"
            marginRight="5"
            className="items-center mr-5"
        >
            <Flex alignItems="center">
                <Avatar />
                <Text marginLeft="2" fontWeight="bold">
                    Username
                </Text>
                <Icon w={5} h={5} as={DotIcon} />
                <Text fontWeight="medium" fontSize="xs">
                    18 min ago
                </Text>
            </Flex>
            <Menu>
                <MenuButton
                    as={IconButton}
                    icon={<Icon w={5} h={5} as={optionIcon} />}
                    borderRadius="full"
                />
                <MenuList
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.200"
                    }
                >
                    <MenuItem icon={<Icon w={5} h={5} as={EditIcon} />}>
                        Edit the question
                    </MenuItem>
                    <MenuItem icon={<Icon w={5} h={5} as={DeleteIcon} />}>
                        Delete the question
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default UserInfo;
