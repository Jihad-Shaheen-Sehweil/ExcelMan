import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

const InputField = ({ half, name, handleChange, label, autoFocus, type }) => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (
        <div className="bg-white">
            {type === "password" || type === "confirmPassword" ? (
                <InputGroup size="sm">
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
                    size="md"
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
