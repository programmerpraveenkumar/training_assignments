import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Product from "./Product";
import Singlepost from "./Singlepost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home.html" element={<Home />}></Route>
        <Route path="/about.html" element={<About />}></Route>
        <Route path="/blog.html" element={<Blog />}></Route>
        <Route path="/contact.html" element={<Contact />}></Route>
        <Route path="/product.html" element={<Product />}></Route>
        <Route path="/singlepost.html" element={<Singlepost />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
