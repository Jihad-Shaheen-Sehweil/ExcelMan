import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { myNewTheme as theme } from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clintId = process.env.REACT_APP_AUTH0_CLIENT_ID;

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
                domain={domain}
                clintId={clintId}
                redirectUri={window.location.origin}
            >
                <ChakraProvider resetCSS theme={theme}>
                    <App />
                </ChakraProvider>
            </Auth0Provider>
        </Provider>
    </React.StrictMode>
);
