import { Box } from "@chakra-ui/react";
import React from "react";
import Home from "./Home";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main>
            <Header />
                <Outlet />
            <Footer />
        </main>
    );
};

export default Layout;
