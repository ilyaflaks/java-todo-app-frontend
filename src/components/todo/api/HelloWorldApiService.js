import { apiClient } from "./ApiClient";
// export function retrieveHelloWorldBean() {
//   return axios.get("http://localhost:8080/hello-world-bean");
// } //SAME THING BELOW

// const apiClient = axios.create({
//   baseURL: "http://localhost:8080", //avoid having to write "http://localhost:8080" every time
// });

export const retrieveHelloWorldBean = () => apiClient.get("/hello-world-bean");

export const retrieveHelloWorldPath = (username, token) =>
  apiClient.get(
    `/hello-world/path-variable/${username}`
    // , {
    //   headers: {
    //     Authorization: token,
    //   },
    //}
  );

export const executeAuthService = (token) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });
