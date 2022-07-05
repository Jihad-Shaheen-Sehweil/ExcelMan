import React from "react";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { BiLike as LikeIcon } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
    likeQuestion,
    selectQuestionLikeCount,
} from "../../../app/sliceReducers/questionsSlice";

const Like = ({ user, question }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    const { sub: userId } = user;
    const { id: questionId, features } = question;

    const { isAuthenticated } = useAuth0();
    const dispatch = useDispatch();

    const handleLike = () => {
        if (isAuthenticated) {
            dispatch(likeQuestion(userId, questionId));
        }
    };
    return (
        <div className="flex items-center ml-3 group cursor-pointer">
            <Icon
                className="group-hover:text-blue-600 "
                color={bgColor === "backgroundLight" ? "black" : "white"}
                w={6}
                h={6}
                as={LikeIcon}
                onClick={handleLike}
            />
            {/* <p className="pl-1 text-xs group-hover:text-blue-600">{likes}</p> */}
        </div>
    );
};

export default Like;
