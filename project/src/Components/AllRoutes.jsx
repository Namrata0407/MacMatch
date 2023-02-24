import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Signup from "./../Pages/Signup/Signup";
import Body from "./../Pages/HomePage/Body/Body";
import Login from "./../Pages/Login/Login";
import LoginAdmin from "./../Pages/LoginAdmin/LoginAdmin";

import ProductStore from "../Pages/ProductStore";
import SingleProductPage from "../Pages/SingleProductPage";
import CartPage from "../Pages/CartPage";
import Checkout from "../Pages/Checkout";
import Shipping from "../Pages/Shipping";
import AdminDashboard from "../Admin/Pages/AdminDashboard";
import AdminOrders from "../Admin/Pages/AdminOrders";
import AdminProducts from "../Admin/Pages/AdminProducts";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminPricing from "../Admin/Pages/AdminPricing";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PrivateRouteAdmin from "./PrivateRoute/PrivateRouteAdmin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signinadmin" element={<LoginAdmin />} />
      <Route path="/store" element={<ProductStore />} />
      <Route path="/product/:id" element={<SingleProductPage />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/shipping" element={<Shipping />} />

      {/* admin */}
      <Route
        path="/admin"
        element={
          <PrivateRouteAdmin>
            <AdminDashboard />
          </PrivateRouteAdmin>
        }
      />
      <Route path="/admin/orders" element={<AdminOrders />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/pricing" element={<AdminPricing />} />
    </Routes>
  );
};

export default AllRoutes;
