import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Header currentMenu="about" />
      <section className="about_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h3 className=" ">ABOUT OUR COMPANY</h3>
          </div>
          <p className="layout_padding2-top">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
          <div className="img-box layout_padding2">
            <img src="images/about-img.jpg" alt="" />
          </div>
          <p className="layout_padding2-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
        <div className="container">
          <div className="btn-box">
            <a href="">Read More</a>
            <hr />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
