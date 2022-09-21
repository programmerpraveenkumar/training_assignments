import Header from "./Header";
import Footer from "./Footer";

function About() {
  let message = "This is the about page.";
  return (
    <div>
      <Header />
      <h1>About the important things in life...</h1>
      <p>{message}</p>
      <Footer />
    </div>
  );
}

export default About;
