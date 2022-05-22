import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiLike as LikeIcon } from "react-icons/bi";

const Like = () => {
    return (
        <div className="flex items-center ml-3 group cursor-pointer">
            <Icon
                className="group-hover:text-blue-600 "
                color="black"
                w={6}
                h={6}
                as={LikeIcon}
            />
            <p className="pl-1 text-xs group-hover:text-blue-600">10</p>
        </div>
    );
};

export default Like;
