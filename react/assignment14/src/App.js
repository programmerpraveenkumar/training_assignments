import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home.html" element={<Home />}></Route>
        <Route path="/about.html" element={<About />}></Route>
        <Route path="/service.html" element={<Service />}></Route>
        <Route path="/contact.html" element={<Contact />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
