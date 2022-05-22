import React from "react";
import Comments from "./Featues/Comments";
import Like from "./Featues/Like";

import UserInfo from "./Featues/UserInfo";

const Question = () => {
    return (
        <article className="border border-gray-300 bg-white my-3 w-6/12 p-3">
            <UserInfo />
            <p className="font-medium border-b">Question</p>
            <p className="pt-2">The Answer</p>
            <section className="flex items-center pt-5">
                <Like />
                <Comments />
            </section>
        </article>
    );
};

export default Question;
