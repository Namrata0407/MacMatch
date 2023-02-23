import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Signup from './../Pages/Signup/Signup';
import Body from './../Pages/HomePage/Body/Body';
import Login from './../Pages/Login/Login';
import LoginAdmin from './../Pages/LoginAdmin/LoginAdmin';

import ProductStore from "../Pages/ProductStore";
import SingleProductPage from "../Pages/SingleProductPage";




const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signinadmin" element={<LoginAdmin />} />
      <Route path="/store" element={<ProductStore/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}
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

