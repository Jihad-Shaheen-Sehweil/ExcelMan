import {
    Button,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const InputField = ({ name, handleChange, label, autoFocus, type }) => {
    const [show, setShow] = React.useState(false);
    const bgColor = useColorModeValue("backgroundLight", "backgroundDark");
    const handleClick = () => setShow(!show);

    return (
        <div className=" rounded-md py-2">
            {type === "password" || type === "confirmPassword" ? (
                <InputGroup
                    borderRadius="md"
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.100"
                    }
                >
                    <Input
                        name={name}
                        onChange={handleChange}
                        placeholder={label}
                        type={show ? "text" : "password"}
                        required
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            ) : (
                <Input
                    bg={
                        bgColor === "backgroundLight"
                            ? "white"
                            : "whiteAlpha.200"
                    }
                    size="lg"
                    h="40px"
                    name={name}
                    onChange={handleChange}
                    placeholder={label}
                    autoFocus={autoFocus}
                    type={type}
                    required
                />
            )}
        </div>
    );
};

export default InputField;
