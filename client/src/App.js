// import Header from "./Header";
// import Slideshow from "./components/slideshow";
// import Pictures from "./components/slideshow";
// import CarouselPage from "./components/slideshow";
import "./App.css";
// import "./src/assets";
import Navbar from "./components/Navbar";
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'exact component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
