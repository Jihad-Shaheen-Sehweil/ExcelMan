import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Form from "./components/Form";
import Lessons from "./components/Lessons";

function App() {
    return (
        <main className="w-screen bg-[#F2F2F2] scrollbar-hide">
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
        </main>
    );
}

export default App;
