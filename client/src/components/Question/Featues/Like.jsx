import React from "react";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { BiLike as LikeIcon } from "react-icons/bi";
import { useAuth0 } from "@auth0/auth0-react";

const Like = ({ user, question }) => {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { isAuthenticated } = useAuth0();

    // if (isAuthenticated)
        return (
            <div className="flex items-center ml-3 group cursor-pointer">
                <Icon
                    className="group-hover:text-blue-600 "
                    color={bgColor === "backgroundLight" ? "black" : "white"}
                    w={6}
                    h={6}
                    as={LikeIcon}
                />
                <p className="pl-1 text-xs group-hover:text-blue-600">10</p>
            </div>
        );
};

export default Like;
