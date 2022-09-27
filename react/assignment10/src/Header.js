import { useEffect, useState } from "react";

function Header(props) {
  const [isExist, setIsExist] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("token") != undefined &&
      localStorage.getItem("token") != ""
    ) {
      setIsExist(true);
    } else {
      setIsExist(false);
    }
  }, []);

  return (
    <div>
      <ul className="nav">
        <li>
          {/* the href will be in the url this link leads to*/}
          <a
            className={props.currentMenu == "home" ? "active" : ""}
            href="home"
          >
            HOME
          </a>
        </li>
        <li>
          <a
            className={props.currentMenu == "about" ? "active" : ""}
            href="aboutlink"
          >
            ABOUT
          </a>
        </li>
        <li>
          <a
            className={props.currentMenu == "contact" ? "active" : ""}
            href="contact"
          >
            CONTACT
          </a>
        </li>
        <li>
          {/* the href will be in the url this link leads to*/}
          <a
            className={props.currentMenu == "homeclass" ? "active" : ""}
            href="homeclass"
          >
            HOMECLASS
          </a>
        </li>
        {isExist ? (
          <li>
            <a href="#">LOGOUT</a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Header;
