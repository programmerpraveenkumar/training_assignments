import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

function Service() {
  return (
    <>
      <Header currentMenu="service" />
      <section className="service_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h3 className=" ">OUR SERVICES</h3>
          </div>
          <p className="">ad minim veniam, quis nostrud exercitation ullamco</p>
          <div className="service_container ">
            <div className="row">
              <div className="col-md-3">
                <div className="box b-1">
                  <div className="img-box">
                    <img src="images/s-1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Tab Services</h6>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className="btn-box">
                      <a href="">Read More</a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box b-2">
                  <div className="img-box">
                    <img src="images/s-2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Pipe Water</h6>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className="btn-box">
                      <a href="">Read More</a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box b-3">
                  <div className="img-box">
                    <img src="images/s-3.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Washing Machine</h6>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className="btn-box">
                      <a href="">Read More</a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box b-4">
                  <div className="img-box">
                    <img src="images/s-4.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h6>Hand Washing</h6>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className="btn-box">
                      <a href="">Read More</a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
