import { Route } from "react-router";
import { Routes } from "react-router-dom";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Body from './Body/Body';
import Signup from './../Pages/Signup/Signup';


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
