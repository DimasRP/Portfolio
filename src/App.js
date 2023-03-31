// import logo from './logo.svg';
// import './App.css';

import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MyProject from "./components/MyProject/MyProject";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Skills/>
      <MyProject/>
      <Footer/>
    </div>
  );
}

export default App;
