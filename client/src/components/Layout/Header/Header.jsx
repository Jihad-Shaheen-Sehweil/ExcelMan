import React from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Bannar from "./Bannar";

const Header = () => {
    const location = useLocation();

    return (
        <section>
            <Navbar />
            {location.pathname === "/home" && <Bannar />}
        </section>
    );
};

export default Header;
