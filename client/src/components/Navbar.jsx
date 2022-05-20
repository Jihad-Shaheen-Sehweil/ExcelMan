import React from "react";
import { Icon, Tooltip } from "@chakra-ui/react";
import {
    IoMdMoon as OutlinedMoonIcon,
    IoMdAddCircleOutline as OutlinedAddIcon,
} from "react-icons/io";
import { RiFileExcel2Fill as OutlinedExcelIcon } from "react-icons/ri";
import { MdOutlineLanguage as OutlinedLanguageIcon } from "react-icons/md";
import { RiBookLine as OutlinedBookIcon } from "react-icons/ri";
import Bannar from "./Bannar";

const Navbar = () => {
    return (
        <section>
            <main className="w-screen flex justify-between fixed bg-[#5F7161] h-14 items-center text-white px-10">
                <Tooltip label="Home" bg="green.400" hasArrow>
                    <div className="flex p-2 items-center hover:bg-[#6D8B74] rounded-full cursor-pointer hover:text-black">
                        <Icon
                            className="pr-1"
                            w={5}
                            h={5}
                            as={OutlinedExcelIcon}
                        />
                        <p className="">ExcelMan</p>
                    </div>
                </Tooltip>
                <Tooltip label="Lessons" bg="green.400" hasArrow>
                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedBookIcon}
                        />
                    </div>
                </Tooltip>
                <Tooltip label="Ask a question" bg="green.400" hasArrow>
                    <div>
                        <Icon
                            className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                            color="white"
                            w={9}
                            h={9}
                            as={OutlinedAddIcon}
                        />
                    </div>
                </Tooltip>
                
                <p className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer">
                    Sign In
                </p>

                <div className="flex">
                    <Tooltip label="Change Language" bg="green.400" hasArrow>
                        <div>
                            <Icon
                                className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                                color="white"
                                w={9}
                                h={9}
                                as={OutlinedLanguageIcon}
                            />
                        </div>
                    </Tooltip>
                    <Tooltip label="Dark Theme" bg="green.400" hasArrow>
                        <div>
                            <Icon
                                className="hover:text-black hover:bg-[#6D8B74] rounded-full p-2 cursor-pointer"
                                color="white"
                                w={9}
                                h={9}
                                as={OutlinedMoonIcon}
                            />
                        </div>
                    </Tooltip>
                </div>
            </main>
            <Bannar />
        </section>
    );
};
export default Navbar;
