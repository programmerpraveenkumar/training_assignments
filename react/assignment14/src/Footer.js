import logo from "./logo.svg";
import "./App.css";

function Footer() {
  return (
    <>
      <section className="info_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="info-logo">
                <h2>Heustonn</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-nav">
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-contact">
                <h4>Contact Info</h4>
                <div className="location">
                  <h6>Corporate Office Address:</h6>
                  <a href="">
                    <img src="images/location.png" alt="" />
                    <span>Loram ipusm New York, NY 36524</span>
                  </a>
                </div>
                <div className="call">
                  <h6>Customer Service:</h6>
                  <a href="">
                    <img src="images/telephone.png" alt="" />
                    <span>( +01 1234567890 )</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="discover">
                <h4>Discover</h4>
                <ul>
                  <li>
                    <a href="">Help</a>
                  </li>
                  <li>
                    <a href="">How It Works</a>
                  </li>
                  <li>
                    <a href="">subscribe</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
                <div className="social-box">
                  <a href="">
                    <img src="images/facebook.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/twitter.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/google-plus.png" alt="" />
                  </a>
                  <a href="">
                    <img src="images/linkedin.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid footer_section">
        <p>
          Copyright &copy; 2019 All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </section>
    </>
  );
}

export default Footer;
