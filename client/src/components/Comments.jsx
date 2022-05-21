import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaRegComment as CommentIcon } from "react-icons/fa";

const Comments = () => {
    return (
        <div className="flex items-center ml-3 group cursor-pointer">
            <Icon
                className="group-hover:text-[#27b573]"
                color="black"
                w={5}
                h={5}
                as={CommentIcon}
            />
            <p className="pl-1 text-xs group-hover:text-[#27b573]">10</p>
        </div>
    );
};

export default Comments;
