import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/button";

export const myNewTheme = extendTheme({
    colors: {
        primary: "#587F71",
        secondary: "#6D8B74",
        highlight: "#767FAE",
        warning: "#FFDD82",
        danger: "#9F5856",
        backgroundLight: "#F2F2F2",
        backgroundDark: "#191A19",
    },
    components: {
        Button,
    },
});
