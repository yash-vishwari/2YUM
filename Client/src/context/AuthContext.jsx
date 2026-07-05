import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [userData, setUserData] = useState( JSON.parse(sessionStorage.getItem("UserData"))|| null);
  const [isLogin, setIsLogin] = useState(!!userData);

  useEffect(() => {
    setIsLogin(!!userData);
  }, [userData]);

  const data = { userData, setUserData, isLogin, setIsLogin };
  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
