import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function Home() {
  const [peopleList, setPeopleList] = useState([]);
  const [page, setPage] = useState("1");
  const [message, setMessage] = useState("");

  const getApiResponse = (page) => {
    fetch("https://reqres.in/api/users?page=" + page)
      .then((response) => response.json())
      .then((responseTwo) => {
        setPeopleList(responseTwo["data"]);
        console.log(responseTwo);
        if (responseTwo["data"].length == 0) {
          setMessage("No UserFound");
        }
      });
  };

  useEffect(getApiResponse, []);
  return (
    <>
      <Header currentMenu="home" />
      <section className=" slider_section position-relative">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img
                            src="images/slider-img.jpg"
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div>
                          <h1>
                            Heustonn <br />
                            Maintenance <br />
                            <span>Service</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img
                            src="images/slider-img.jpg"
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div>
                          <h1>
                            Heustonn <br />
                            Maintenance <br />
                            <span>Service</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="slider_item-box layout_padding2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="img-box">
                        <div>
                          <img
                            src="images/slider-img.jpg"
                            alt=""
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="detail-box">
                        <div>
                          <h1>
                            Heustonn <br />
                            Maintenance <br />
                            <span>Service</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="slider_nav-box">
            <div className="btn-box">
              <a href="">Read More</a>
              <hr />
            </div>
            <div className="custom_carousel-control">
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg">
        <section className="about_section layout_padding">
          <div className="container">
            <div className="custom_heading-container">
              <h3 className=" ">ABOUT OUR COMPANY</h3>
            </div>
            <p className="layout_padding2-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
            <div className="img-box layout_padding2">
              <img src="images/about-img.jpg" alt="" />
            </div>
            <p className="layout_padding2-bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
            </p>
          </div>
          <div className="container">
            <div className="btn-box">
              <a href="">Read More</a>
              <hr />
            </div>
          </div>
        </section>

        <section className="service_section layout_padding-bottom">
          <div className="container">
            <div className="custom_heading-container">
              <h3 className=" ">OUR SERVICES</h3>
            </div>
            <p className="">
              ad minim veniam, quis nostrud exercitation ullamco
            </p>
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

        <section className="work_section layout_padding">
          <div className="container">
            <div className="custom_heading-container">
              <h3 className=" ">HOW IT WORKS</h3>
            </div>
          </div>
          <div className="work_container ">
            <select
              onChange={(e) => {
                setPage(e.target.value);
                getApiResponse(e.target.value);
              }}
            >
              <option value="1">Page 1</option>
              <option value="2">Page 2</option>
            </select>

            {peopleList.map((object, index) => {
              return (
                <div className={"box b-" + Math.abs(index + 1)}>
                  <div className="img-box">
                    <img src={object.avatar} alt="" />
                  </div>
                  <div className="name">
                    <h6>
                      {object.first_name} {object.last_name}
                    </h6>
                  </div>
                </div>
              );
            })}

            {/* <div className="box b-1">
              <div className="img-box">
                <img src="images/w-1.png" alt="" />
              </div>
              <div className="name">
                <h6>Adipiscing elit</h6>
              </div>
            </div>

            <div className="box b-2">
              <div className="img-box ">
                <img src="images/w-2.png" alt="" />
              </div>
              <div className="name">
                <h6>Adipiscing elit</h6>
              </div>
            </div>

            <div className="box b-3">
              <div className="img-box ">
                <img src="images/w-3.png" alt="" />
              </div>
              <div className="name">
                <h6>Adipiscing elit</h6>
              </div>
            </div>

            <div className="box b-4">
              <div className="img-box ">
                <img src="images/w-4.png" alt="" />
              </div>
              <div className="name">
                <h6>Adipiscing elit</h6>
              </div>
            </div> */}
          </div>

          <div className="container">
            <div className="btn-box">
              <a href="">Read More</a>
              <hr />
            </div>
          </div>
        </section>

        <section className="contact_section layout_padding">
          <div className="custom_heading-container">
            <h3 className=" ">Booking Online</h3>
          </div>
          <div className="container layout_padding2-top">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <form action="">
                  <div>
                    <input type="text" placeholder="NAME" />
                  </div>
                  <div>
                    <input type="email" placeholder="EMAIL" />
                  </div>
                  <div>
                    <input type="text" placeholder="PHONE NUMBER" />
                  </div>
                  <div>
                    <select name="" id="">
                      <option value="" disabled selected>
                        TYPE OF SERVICE
                      </option>
                      <option value="">Service 1</option>
                      <option value="">Service 2</option>
                      <option value="">Service 3</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="message-box"
                      placeholder="MESSAGE"
                    />
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button>SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="client_section layout_padding-bottom">
          <div className="container">
            <div className="custom_heading-container">
              <h3 className=" ">What clients says</h3>
            </div>
            <div className="layout_padding2-top">
              <div className="client_container">
                <div className="detail-box">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                  </p>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/client.png" alt="" />
                  </div>
                  <div className="name">
                    <h5>tempor incididunt</h5>
                    <h6>Owner</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
