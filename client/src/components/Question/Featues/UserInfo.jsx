import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

<<<<<<< HEAD
const UserInfo = ({ question, setCurrentId }) => {
=======
import { deleteQuestion } from "../../../app/sliceReducers/questionsSlice";
import TimeAgo from "./TimeAgo";

const UserInfo = ({ question, user }) => {
>>>>>>> 0e311083ebae962d6d65b03b55369ca17a6b61a5
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { id, questionCreatorId, questionCreatorUsername, date } = question;
    const { userId, usernameImage } = user;
    const navigate = useNavigate();
<<<<<<< HEAD
    const user = JSON.parse(localStorage.getItem("profile"));
=======
    const dispatch = useDispatch();

    const [questionId, setQuestionId] = useState(null);
>>>>>>> 0e311083ebae962d6d65b03b55369ca17a6b61a5

    const handleProfileClick = () => {
        navigate(`/profile/${userId}`);
    };

    const handleEdit = () => {
        navigate(`/form/questions/${id}`);
    };

    const handleDelete = () => {
        dispatch(deleteQuestion(questionId));
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
                <Avatar src={usernameImage} />
                <Text
                    marginLeft="2"
                    fontWeight="bold"
                    _hover={{ textDecorationLine: "underline" }}
                    cursor="pointer"
                    onClick={handleProfileClick}
                >
<<<<<<< HEAD
                    {question?.name}
=======
                    {questionCreatorUsername}
>>>>>>> 0e311083ebae962d6d65b03b55369ca17a6b61a5
                </Text>
                <Icon w={5} h={5} as={DotIcon} />
                <Text fontWeight="medium" fontSize="xs">
                    <TimeAgo timeStamp={date} />
                </Text>
            </Flex>
            {userId === questionCreatorId && (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<Icon w={5} h={5} as={optionIcon} />}
                        borderRadius="full"
                        onClick={() => {
                            setQuestionId(question.id);
                        }}
                    />
                    <MenuList
                        bg={
                            bgColor === "backgroundLight"
                                ? "white"
                                : "whiteAlpha.200"
                        }
                    >
                        <MenuItem
                            icon={<Icon w={5} h={5} as={EditIcon} />}
                            onClick={handleEdit}
                        >
                            Edit the question
                        </MenuItem>
                        <MenuItem
                            icon={<Icon w={5} h={5} as={DeleteIcon} />}
                            onClick={handleDelete}
                        >
                            Delete the question
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
};

export default UserInfo;
