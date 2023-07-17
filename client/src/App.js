// import Header from "./components/Header";
// import Slideshow from "./components/slideshow";
// import Pictures from "./components/slideshow";
// import CarouselPage from "./components/slideshow";
// import "./src/assets";
import Navbar from "./components/Navbar";
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
