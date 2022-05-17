import React from "react";
import { Icon } from "@chakra-ui/react";
import { IoMdMoon as outlinedMoonIcon } from "react-icons/io";
import { RiFileExcel2Fill as outlinedExcelIcon } from "react-icons/ri";

import { MdOutlineLanguage as outlinedLanguageIcon } from "react-icons/md";

const Navbar = () => {
    return (
        <section>
            <main className="flex justify-between ">
                <p>Logo</p>
                <Icon w={5} h={5} as={outlinedExcelIcon} />
                <p>Sign In</p>
                <div >
                    <Icon className="mr-2" color="black" w={5} h={5} as={outlinedLanguageIcon} />
                    <Icon className="" w={5} h={5} as={outlinedMoonIcon} />
                </div>
            </main>
        </section>
    );
};
export default Navbar;
