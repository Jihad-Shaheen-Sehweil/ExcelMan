import React from "react";
import { Icon } from "@chakra-ui/react";
import { BiLike as LikeIcon } from "react-icons/bi";

const Like = () => {
    return (
        <div className="flex items-center ml-3">
            <Icon w={5} h={5} as={LikeIcon} />
            <p className="pl-1 text-xs">10</p>
        </div>
    );
};

export default Like;
