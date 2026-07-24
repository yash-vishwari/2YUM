import { useEffect, useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [user, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("UserData")) || null,
  );
  const [isLogin, setIsLogin] = useState(!!userData);
  const [role, setRole] = useState(userData ? userData.userType : null);
  useEffect(() => {
    setIsLogin(!!userData);
    setRole(user ? user.userType : null);
  }, [userData]);

  const data = { userData, setUserData, isLogin, setIsLogin, role, setRole };
  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
