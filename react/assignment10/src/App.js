import logo from "./logo.svg";
import "./App.css";

// step 1: use the following command for new react projects: npm i react-router-dom
// step 2: import the BrowserRouter
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import HomeClass from "./HomeClass";

function App() {
  return (
    <div>
      {/* step 3: Put in this hierarchy of Router, Routes and Route */}
      <Router>
        <Routes>
          {/* There is no relationship between the path value and the 
          element value, you could call the path anything you like. As long as the 
          url has the value stated in path, it will load the component  */}
          <Route path="home" element={<Home />} />
          <Route path="aboutlink" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="homeclass" element={<HomeClass />} />
          {/* if you put a url that is not defined here, it does not match with any element here, 
          hence the page will not load and there will be a white colored page.  */}
          <Route path="" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
