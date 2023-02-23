import AllRoutes from "./Components/AllRoutes";
import Navbar2 from "./Components/Navbar/Navbar2";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AdiminRoutes from "./Admin/Components/AdminRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />

      <AllRoutes />
      {/* <AdiminRoutes /> */}
      <Footer />
    </div>
  );
}

export default App;
