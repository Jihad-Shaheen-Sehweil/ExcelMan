import React from "react";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRegComment as CommentIcon } from "react-icons/fa";

const Comment = ({ handleComment }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    return (
        <div className="flex items-center mx-3 group cursor-pointer">
            <Icon
                className="group-hover:text-[#27b573]"
                color={bgColor === "backgroundLight" ? "black" : "white"}
                w={5}
                h={5}
                as={CommentIcon}
                onClick={handleComment}
            />
            <p className="pl-1 text-xs group-hover:text-[#27b573]">10</p>
        </div>
    );
};

export default Comment;
