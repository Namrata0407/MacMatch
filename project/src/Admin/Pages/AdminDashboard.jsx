import AdminDashboard1 from "../Components/adminDashboard1";
import AdminDashboard2 from "../Components/adminDashboard2";
import LineSales from "../Components/AdminCharts/adminDashboardLiveChart";
import StatisticsCard from "../Components/AdminCharts/AdminDashboardStaticCard";
// import AdminPieCharts from "../Components/AdminCharts/AdminPieChart";



const AdminDashboard = () => {
    return(
      <div>
         <AdminDashboard2/>
       {/* <AdminDashboard1/> */}
       {/* <AdminPieCharts/> */}
       <LineSales/>
       <StatisticsCard/>
      
      </div>
    )
}

export default AdminDashboard;