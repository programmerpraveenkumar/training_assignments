import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact us for more information...</h1>
      <div className="form">
        <form action="" method="get">
          <label for="name" className="formLabel">
            Username
          </label>
          <input
            name="username"
            id="name"
            type="text"
            placeholder="Enter your username"
          />
          <label for="email" className="formLabel">
            Email
          </label>
          <input
            name="emailAddress"
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
          <label for="message" className="formLabel">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message us about anything"
          />
          <hr />
          <input type="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
