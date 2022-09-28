import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <>
      {" "}
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="home.html">
              <span>Heustonn</span>
            </a>
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li
                    className={
                      props.currentMenu == "home"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <a className="nav-link" href="home.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li
                    className={
                      props.currentMenu == "about"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <a className="nav-link" href="about.html">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li
                    className={
                      props.currentMenu == "service"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <a className="nav-link" href="service.html">
                      {" "}
                      Services{" "}
                    </a>
                  </li>
                  <li
                    className={
                      props.currentMenu == "contact"
                        ? "nav-item active"
                        : "nav-item"
                    }
                  >
                    <a className="nav-link" href="contact.html">
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
              <button
                className="btn  my-2 my-sm-0 nav_search-btn"
                type="submit"
              ></button>
            </form>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
