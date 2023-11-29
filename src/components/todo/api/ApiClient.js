import axios from "axios";

export const apiClient = axios.create({
  //baseURL: "http://localhost:5000",
  baseURL:
    "http://todo-fullstack-app-env.eba-e3nuphge.us-west-1.elasticbeanstalk.com",
});
