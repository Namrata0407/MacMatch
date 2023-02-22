import { Route } from "react-router";
import { Routes } from "react-router-dom";
// import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Signup from './../Pages/Signup/Signup';
import Body from './../Pages/HomePage/Body/Body';
import Login from './../Pages/Login/Login';
import LoginAdmin from './../Pages/LoginAdmin/LoginAdmin';




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signinadmin" element={<LoginAdmin />} />
      <Route path="/product/:id" element={
      <h1>Akash product page</h1>}
      />
      
      {/* <Route
        path="/addProduct"
        element={
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        }
      /> */}
    </Routes>
  );
};

export default AllRoutes;

