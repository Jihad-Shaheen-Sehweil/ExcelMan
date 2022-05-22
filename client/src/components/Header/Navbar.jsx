import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";
import {
    IoMdMoon as OutlinedMoonIcon,
    IoMdAddCircleOutline as OutlinedAddIcon,
} from "react-icons/io";
import { RiFileExcel2Fill as OutlinedExcelIcon } from "react-icons/ri";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { RiBookLine as OutlinedBookIcon } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Flex
                bg="primary"
                width="full"
                justify="space-between"
                alignItems="center"
                position="fixed"
                height="3.5rem"
                paddingX="10"
                textColor="white"
            >
                <Link to="/">
                    <div className="flex p-2 items-center hover:bg-[#6D8B74] rounded-full cursor-pointer hover:text-black">
                        <Icon
                            className="pr-1"
                            w={5}
                            h={5}
                            as={OutlinedExcelIcon}
                        />
                        <p className="">ExcelMan</p>
                    </div>
                </Link>
                <Link to="/lessons">
                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedBookIcon}
                        />
                    </div>
                </Link>
                <Link to="/form">
                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedAddIcon}
                        />
                    </div>
                </Link>
                <Link to="/auth">
                    <p className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer">
                        Sign In
                    </p>
                </Link>

                <div className="flex">
                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedLanguageIcon}
                        />
                    </div>

                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedMoonIcon}
                        />
                    </div>
                </div>
            </Flex>
        </nav>
    );
};
export default Navbar;
