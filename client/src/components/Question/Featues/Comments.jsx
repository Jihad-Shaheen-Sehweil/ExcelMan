import React from "react";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { FaRegComment as CommentIcon } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Comments = ({ user, question }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { isAuthenticated } = useAuth0();

    if (isAuthenticated)
        return (
            <div className="flex items-center ml-3 group cursor-pointer">
                <Icon
                    className="group-hover:text-[#27b573]"
                    color={bgColor === "backgroundLight" ? "black" : "white"}
                    w={5}
                    h={5}
                    as={CommentIcon}
                />
                <p className="pl-1 text-xs group-hover:text-[#27b573]">10</p>
            </div>
        );
};

export default Comments;
