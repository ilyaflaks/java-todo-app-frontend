import { apiClient } from "./ApiClient";

// const apiClient = axios.create({
//   baseURL: "http://localhost:8080", //avoid having to write "http://localhost:8080" every time
// });

export const retrieveAllTodosForUsernameApi = (username) => {
  // console.log("username: ", username);
  // console.log(`http://localhost:8080/users/${username}/todos`);
  return apiClient.get(`/users/${username}/todos`);
};

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);

export const retrieveTodoApi = (username, id) =>
  apiClient.get(`/users/${username}/todos/${id}`);

export const updateTodoApi = (username, id, todo) => {
  // console.log("username: ", username, ", id: ", id, ", todo: ", todo);
  // console.log(JSON.stringify(todo));
  return apiClient.put(`/users/${username}/todos/${id}`, todo);
};

export const createTodoApi = (username, todo) =>
  apiClient.post(`users/${username}/todos`, todo);
