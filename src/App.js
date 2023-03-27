// import logo from './logo.svg';
// import './App.css';

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MyProject from "./components/MyProject/MyProject";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Services/>
      <MyProject/>
      <Footer/>
    </div>
  );
}

export default App;
