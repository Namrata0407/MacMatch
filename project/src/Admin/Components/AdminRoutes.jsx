import { Route, Routes } from "react-router-dom";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminOrders from "../Pages/AdminOrders";
import AdminPricing from "../Pages/AdminPricing";
import AdminProducts from "../Pages/AdminProducts";
import AdminUsers from "../Pages/AdminUsers";


const AdiminRoutes = () => {

    return(
        <Routes>
          <Route path='/admin' element={<AdminDashboard/>} />
          <Route path='/admin/orders' element={<AdminOrders/>} />
          <Route path='/admin/products' element={<AdminProducts/>} />
          <Route path='/admin/users' element={<AdminUsers/>} />
          <Route path='/admin/pricing' element={<AdminPricing/>} />
       </Routes>
    )
}

export default AdiminRoutes;