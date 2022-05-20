import React from "react";
import { Avatar, Icon } from "@chakra-ui/react";
import { BsDot as DotIcon } from "react-icons/bs";



const UserInfo = () => {
    return (
        <section className="flex items-center">
            <Avatar />
            <p className="ml-2 font-bold">Username</p>
            <Icon w={5} h={5} as={DotIcon} />
            <p className=" font-medium text-xs">18 min ago</p>
        </section>
    );
};

export default UserInfo;
