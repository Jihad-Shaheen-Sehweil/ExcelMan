import React from "react";
import { Image } from "@chakra-ui/react";

import imageBanner from "../../../images/excel_banner.png";
const Bannar = () => {
    return (
        <section className="pt-14">
            <Image objectFit="contain" src={imageBanner} />
        </section>
    );
};

export default Bannar;
