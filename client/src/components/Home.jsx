import React from "react";
import Bannar from "./Bannar";
import Questions from "./Questions";

const Home = () => {
    return (
        <main>
            <Bannar />
            <div className="px-10 pd-10 ">
                <Questions />
            </div>
        </main>
    );
};

export default Home;
