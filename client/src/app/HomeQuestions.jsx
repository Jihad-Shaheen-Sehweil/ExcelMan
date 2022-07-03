import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Bannar from "./Header/Bannar";
import Questions from "./Question/Questions";
import {
    selectAllQuestions,
    createQuestion,
} from "../app/sliceReducers/questionsSlice";

const Home = () => {
    const dispatch = useDispatch();
    const questions = useSelector(selectAllQuestions);

    const renderdQuestions = questions.map((question) => (
        <article key={question.id}>
            <h3>{question.title}</h3>
            <p>{question.content}</p>
        </article>
    ));

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const onSaveQuestion = () => {
        if (title && content) {
            dispatch(createQuestion(title, content));
            setTitle("");
            setContent("");
        }
    };
    const canSave = Boolean(title) && Boolean(content);
    const CreateQuestionForm = (
        <main>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
            />
            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                type="text"
            />
            <button onClick={onSaveQuestion} disabled={!canSave}>
                save
            </button>
        </main>
    );
    return (
        <Box>
            <Bannar />
            <Box paddingX="10" paddingBottom="10">
                {CreateQuestionForm}
                {renderdQuestions}
                {/* <Questions /> */}
            </Box>
        </Box>
    );
};

export default Home;
