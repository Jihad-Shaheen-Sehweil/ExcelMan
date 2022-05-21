import { Avatar, Button, Container, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLockAlt } from "react-icons/bi";

import InputField from "./InputField";
const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Auth = () => {
    const [formData, setFormData] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);

    // const dispatch = useDispatch() this to dispath actions
    // const history = useHistory() this from react router dom

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        if (isSignup) {
            // dispatch(signUp(formData, history))
        } else {
            // dispatch(signIn(formData, history))
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
    return (
        <Container
            maxW="600px"
            paddingTop="24"
            className="h-screen flex flex-col items-center"
        >
            <section className="flex items-center justify-center mx-auto w-10 h-10 rounded-full p-2 bg-pink-500">
                <BiLockAlt />
            </section>
            <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
            >
                <Text>{isSignup ? "Sign Up" : "Sign In"}</Text>
                <InputField
                    half
                    name="firstName"
                    handleChange={handleChange}
                    label="First Name"
                    autoFocus
                />
                <InputField
                    half
                    name="lastName"
                    handleChange={handleChange}
                    label="Last Name"
                />
                <InputField
                    name="email"
                    handleChange={handleChange}
                    label="Email"
                    type="email"
                />
                <InputField
                    name="password"
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                />
                {isSignup && (
                    <InputField
                        name="confirmPassword"
                        handleChange={handleChange}
                        label="Repeat Password"
                        type="password"
                    />
                )}
                <Button marginY="5" bg="green.500" type="submit">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Button>
            </form>
            <Button onClick={switchMode} maxW="80" bg="green.400">
                {isSignup
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
            </Button>
        </Container>
    );
};

export default Auth;
