import { apiClient } from "./ApiClient";

export const executeAuthService = (token) =>
  apiClient.get(`/basicauth`, {
    headers: {
      Authorization: token,
    },
  });

export const executeJwtAuthService = (username, password) =>
  apiClient.post(`/authenticate`, { username, password });
