import { Route } from "react-router";
import { Routes } from "react-router-dom";
// import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Signup from './../Pages/Signup/Signup';
import Body from './../Pages/HomePage/Body/Body';



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<Signup />} />
      
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
