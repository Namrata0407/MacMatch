import { useState } from "react";
import AdminNavbar from "./Admin/Components/adminNavbar";
import AdiminRoutes from "./Admin/Components/AdminRoutes";
import AllRoutes from "./Components/AllRoutes";
import BackToTop from "./Components/BackToTop/BackToTop";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // const [athenticated,setAuth] = useState(JSON.parse(localStorage.getItem("adminAuth")));
  
const [athenticated, setAuth] = useState(JSON.parse(localStorage.getItem("adminAuth")))

  return (
    <div className="App">
      {/* <AdminNavbar/> */}
      {/* <AdiminRoutes/> */}
      
      {athenticated === true ? <AdminNavbar/> :(<><AllRoutes /><BackToTop /> </> )}
    </div>
  );
}

export default App;
