// import './App.css';
import AllRoutes from "./Components/AllRoutes";
import Navbar2 from "./Components/Navbar/Navbar2";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />

      <AllRoutes/>

      <Footer/>
    </div>
  );
}

export default App;
