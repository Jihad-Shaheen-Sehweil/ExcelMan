import * as api from "../../api/index";
import { AUTH } from "../constants/actionTypes";

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        const action = { type: AUTH, data };
        dispatch(action);

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        const action = { type: AUTH, data };
        dispatch(action);

        navigate("/");
    } catch (error) {
        console.log(error);
    }
};
