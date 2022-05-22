import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import store from "./redux/index";
import App from "./App";
import "./index.css";
import { myNewTheme as theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ChakraProvider resetCSS theme={theme}>
                <App />
            </ChakraProvider>
        </Provider>
    </React.StrictMode>
);
