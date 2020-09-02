import { WEB_API_BASE_URL } from "../config/environment";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: WEB_API_BASE_URL,
});

export const fetchTodos = () => axiosInstance.get("/");

export const addTodo = ({ title, order, completed }) =>
  axiosInstance.post("/", { title, order, completed });

export const deleteTodo = (id) => axiosInstance.delete(`${id}`);

export const toggleTodo = (id, newState) =>
  axiosInstance.patch(`${id}`, { completed: newState });
