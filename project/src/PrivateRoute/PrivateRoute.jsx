import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


// 1. This particular component shall be a wrapper which based on authentication status either redirects user back to login page or renders the same page;
// 2. if user is not logged in; user should be redirected to the login page;

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!localStorage.getItem('name')) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
