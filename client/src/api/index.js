import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem("profile")).token
        }`;
    }
    return req;
});

export const fetchQuestions = (page) => API.get(`/questions?page=${page}`);
export const fetchQuestion = (id) => API.get(`/questions?page=${id}`);
export const fetchQuestionsBySearch = (searchQuery) =>
    API.get(`/questions/search?searchQuery=${searchQuery}`);
export const createQuestion = (newQuestion) =>
    API.post("/questions", newQuestion);
export const updateQuestion = (id, updatedQuestion) =>
    API.patch(`/questions/${id}`, updatedQuestion);
export const deleteQuestion = (id) => API.delete(`/questions/${id}`);
export const likeQuestion = (id) => API.patch(`/questions/${id}/likeQuestion`);

export const signIn = (FormData) => API.post("/user/signin", FormData);
export const signUp = (FormData) => API.post("/user/signup", FormData);
