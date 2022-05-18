import React from "react";
import Comments from "./Comments";
import Like from "./Like";

import UserInfo from "./UserInfo";

const Question = () => {
    return (
        <article className="border border-gray-300 bg-white my-3 w-6/12 p-3">
            <UserInfo />
            <p>Question</p>
            <p>The Answer</p>
            <section className="flex items-center pt-5">
                <Like />
                <Comments />
            </section>
        </article>
    );
};

export default Question;
