import { Button, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { BiLockAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import InputField from "../Auth/InputField";
import { signIn, signUp } from "../../redux/actions/auth";
import { useAuth0 } from "@auth0/auth0-react";

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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginWithRedirect, isAuthenticated } = useAuth0();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isAuthenticated){
            loginWithRedirect()
        }
        // if (isSignup) {
        //     dispatch(signUp(formData, navigate));
        // } else {
        //     dispatch(signIn(formData, navigate));
        // }
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
            <button onClick={handleSubmit}>sign</button>
            <form
                className="flex flex-col items-center"
                // onSubmit={handleSubmit}
            >
                <Heading as="h3" size="md" paddingY="3">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Heading>
                {isSignup && (
                    <InputField
                        half
                        name="firstName"
                        handleChange={handleChange}
                        label="First Name"
                        autoFocus
                    />
                )}
                {isSignup && (
                    <InputField
                        half
                        name="lastName"
                        handleChange={handleChange}
                        label="Last Name"
                    />
                )}
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
                <Button marginY="5" variant="primary" type="submit">
                    {isSignup ? "Sign Up" : "Sign In"}
                </Button>
            </form>
            <Button onClick={switchMode} maxW="80" variant="secondary">
                {isSignup
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
            </Button>
        </Container>
    );
};

export default Auth;
