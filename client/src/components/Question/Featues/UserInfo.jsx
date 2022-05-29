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
import moment from "moment";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ question, setCurrentId }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("profile"));

    const handleProfileClick = () => {
        navigate(`/profile/${user?.result._id}`);
    };

    const handleEdit = () => {
        navigate(`/form/questions/${question?._id}`);
    };

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
                <Text
                    marginLeft="2"
                    fontWeight="bold"
                    _hover={{ textDecorationLine: "underline" }}
                    cursor="pointer"
                    onClick={handleProfileClick}
                >
                    {question?.name}
                </Text>
                <Icon w={5} h={5} as={DotIcon} />
                <Text fontWeight="medium" fontSize="xs">
                    {moment(question?.createdAt).fromNow()}
                </Text>
            </Flex>
            {user?.result?._id === question?.creator && (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<Icon w={5} h={5} as={optionIcon} />}
                        borderRadius="full"
                        onClick={() => {
                            setCurrentId(question._id);
                        }}
                    />
                    <MenuList
                        bg={
                            bgColor === "backgroundLight"
                                ? "white"
                                : "whiteAlpha.200"
                        }
                        onClick={handleEdit}
                    >
                        <MenuItem icon={<Icon w={5} h={5} as={EditIcon} />}>
                            Edit the question
                        </MenuItem>
                        <MenuItem icon={<Icon w={5} h={5} as={DeleteIcon} />}>
                            Delete the question
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
};

export default UserInfo;
