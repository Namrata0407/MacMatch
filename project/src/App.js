// import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Navbar2 from "./Components/Navbar/Navbar2";
import Footer from './Components/Footer/Footer';
import AllRoutes from "./Components/AllRoutes";

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
