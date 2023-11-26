import { createContext, useState, useContext } from "react";
import {
  executeAuthService,
  executeJwtAuthService,
} from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  async function login(username, password) {
    try {
      const response = await executeJwtAuthService(username, password);

      if (response.status == 200) {
        const jwtToken = "Bearer " + response.data.token;
        setIsAuthed(true);
        setUsername(username);
        setToken(jwtToken);

        apiClient.interceptors.request.use((config) => {
          console.log("intercepting and adding token");
          config.headers.Authorization = jwtToken;
          return config;
        });
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setIsAuthed(false);
    setUsername(null);
    setToken(null);
  }
  return (
    <AuthContext.Provider value={{ isAuthed, login, logout, username, token }}>
      {children}
    </AuthContext.Provider>
  );
}
