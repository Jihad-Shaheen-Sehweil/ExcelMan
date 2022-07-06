import React from "react";
import { Icon, Text, useColorModeValue } from "@chakra-ui/react";
import {
    AiOutlineLike as NotLikeIcon,
    AiFillLike as LikeIcon,
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { likeQuestion } from "../../../app/sliceReducers/questionsSlice";

const Like = ({ user, question }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    // const { sub: userId } = user;
    const { id: questionId, features } = question;
    const { likes } = features;

    const handleLike = () => {
        if (isAuthenticated) {
            dispatch(likeQuestion(user?.sub, questionId));
        }
    };
    return (
        <div className="flex items-center ml-3 group cursor-pointer">
            <Icon
                className="group-hover:text-blue-600"
                color={bgColor === "backgroundLight" ? "black" : "white"}
                w={6}
                h={6}
                as={NotLikeIcon}
                onClick={handleLike}
            />
            <Text className="pl-1 text-xs group-hover:text-blue-600">
                {likes.length}
            </Text>
        </div>
    );
};

export default Like;
