import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { Box, Center, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

import Form from "./components/Form/Form";
import Lessons from "./components/Lessons/Lessons";
import Profile from "./components/Layout/Header/Profile";
import Navbar from "./components/Layout/Header/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import QuestionDetailes from "./components/Question/QuestionDetailes/QuestionDetailes";
import Home from "./components/Layout/Home";
import Auth from "./components/Auth/Auth";
import RequireAuth from "./components/Auth/RequireAuth";
import AnswerForm from "./components/Question/Featues/Answer/AnswerForm";
import NotFound from "./components/Layout/NotFound";

function App() {
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const { isLoading } = useAuth0();

    if (isLoading)
        return (
            <Center className="min-h-screen">
                <Spinner width="16" height="16" />
            </Center>
        );

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
                    <Route path="/home" element={<Home />} />
                    <Route path="/lessons" element={<Lessons />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route
                        path="/form"
                        element={
                            <RequireAuth>
                                <Form />
                            </RequireAuth>
                        }
                    >
                        <Route
                            path="questions/:questionId"
                            element={
                                <RequireAuth>
                                    <Form />
                                </RequireAuth>
                            }
                        />
                    </Route>
                    <Route
                        path="/profile/:id"
                        element={
                            <RequireAuth>
                                <Profile />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/questions/:id"
                        element={
                            <RequireAuth>
                                <QuestionDetailes />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="questions/answer/:id"
                        element={
                            <RequireAuth>
                                <AnswerForm />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
