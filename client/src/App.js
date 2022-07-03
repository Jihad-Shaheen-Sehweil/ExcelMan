import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Lessons from "./components/Lessons/Lessons";
import Profile from "./components/Layout/Header/Profile";
import QuestionDetailes from "./components/Question/QuestionDetailes";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Home";

function App() {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");

    return (
        <Box
            bg={bgColor}
            width="full"
            className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
            // fix scrollbar
        >
            <Router>
                <Routes>
                    <Route path="/" exact element={<Layout />}>
                        <Route index path="home" element={<Home />} />
                        <Route path="lessons" element={<Lessons />} />
                        <Route path="form" element={<Form />}>
                            <Route path="questions/:questionId" element={<Form />} />
                        </Route>
                        <Route path="auth" element={<Auth />} />
                        <Route path="profile/:id" element={<Profile />} />
                        <Route
                            path="questions/:id"
                            element={<QuestionDetailes />}
                        />
                    </Route>
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
