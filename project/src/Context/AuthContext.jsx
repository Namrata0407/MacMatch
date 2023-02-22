import { useState, createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  
  const loginUser = (data) => {
    setIsAuth(true);
    setName(data);
  };

  const logoutUser = () => {
    alert("User logged out Successfull!!");
    setIsAuth(false);
    localStorage.setItem('auth',false);
    localStorage.setItem('name','')
    window.location.reload()
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, loginUser, logoutUser, name }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
