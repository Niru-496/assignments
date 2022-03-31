import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const toggleAuth = (val) => {
    if (val) {
      setToken(val);
    }
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, token }}>
      {children}
    </AuthContext.Provider>
  );
};
