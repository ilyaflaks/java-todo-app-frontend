import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:8080", //avoid having to write "http://localhost:8080" every time
});
