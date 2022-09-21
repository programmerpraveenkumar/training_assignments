function Header() {
  return (
    <div>
      <ul className="nav">
        <li>
          {/* the href will be in the url this link leads to*/}
          <a href="home">HOME</a>
        </li>
        <li>
          <a href="aboutlink">ABOUT</a>
        </li>
        <li>
          <a href="contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
