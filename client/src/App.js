import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Lessons from "./components/Lessons/Lessons";
import Profile from "./components/Header/Profile";
import QuestionDetailes from "./components/Question/QuestionDetailes";

function App() {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const [currentId, setCurrentId] = useState(null);

    return (
        <Box
            bg={bgColor}
            width="full"
            className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100"
            // fix scrollbar
        >
            <Router>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        exact
                        element={<Navigate to="/home" replace />}
                    />
                    <Route
                        path="/home"
                        element={
                            <Home
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        }
                    />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route
                        path="/form"
                        element={
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        }
                    />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/questions/:id" element={<QuestionDetailes />} />
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
