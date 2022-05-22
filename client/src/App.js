import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";
import Form from "./components/Form/Form";
import Lessons from "./components/Lessons/Lessons";
import { Box } from "@chakra-ui/react";

function App() {
    return (
        <Box bg="background" width="full" className="scrollbar-hide">
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
                    <Route path="/form" element={<Form />} />
                    <Route path="/auth" element={<Auth />} />
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
