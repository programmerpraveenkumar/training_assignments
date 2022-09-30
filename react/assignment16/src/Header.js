import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  return (
    <>
      <div id="header">
        <div>
          <a href="home.html" className="logo">
            <img src="images/logo.png" alt="" />
          </a>
          <ul id="navigation">
            <li className={props.currentMenu == "home" ? "selected" : "menu"}>
              <a href="home.html">Home</a>
            </li>
            <li
              className={
                props.currentMenu == "about" ? "menu selected" : "menu"
              }
            >
              <a href="about.html">About</a>
              <ul
                className="primary"
                id={props.currentMenu == "product" ? "selected" : ""}
              >
                <li>
                  <a href="product.html">Product</a>
                </li>
              </ul>
            </li>
            <li
              className={props.currentMenu == "blog" ? "menu selected" : "menu"}
            >
              <a href="blog.html">Blog</a>
              <ul
                className="secondary"
                id={props.currentMenu == "singlepost" ? "selected" : ""}
              >
                <li>
                  <a href="singlepost.html">Single post</a>
                </li>
              </ul>
            </li>
            <li
              className={props.currentMenu == "contact" ? "selected" : "menu"}
            >
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
