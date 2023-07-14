import Header from "./pages/Header";
import Slideshow from "./components/slideshow";
import Pictures from "./components/slideshow";
import CarouselPage from "./components/slideshow";
import "./App.css";
// import "./src/assets";
import Navbar from "./components/Navbar";
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//! Navbar and Routers bugged out like mad
//! useref && usecontext don't exist?

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
