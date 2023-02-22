import AdminDashboard1 from "../Components/adminDashboard1";
import AdminDashboard2 from "../Components/adminDashboard2";
import LineSales from "../Components/AdminCharts/adminDashboardLiveChart";
import StatisticsCard from "../Components/AdminCharts/AdminDashboardStaticCard";



const AdminDashboard = () => {
    return(
      <div>
       <AdminDashboard1/>
       <LineSales/>
       <StatisticsCard/>
       <AdminDashboard2/>
      </div>
    )
}

export default AdminDashboard;