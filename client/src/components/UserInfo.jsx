import React from "react";
import { Avatar, Icon } from "@chakra-ui/react";
import { BsDot as DotIcon } from "react-icons/bs";



const UserInfo = () => {
    return (
        <section className="flex items-center">
            <Avatar />
            <p className="ml-2">Username</p>
            <Icon w={5} h={5} as={DotIcon} />
            <p>time posted on</p>
        </section>
    );
};

export default UserInfo;
