import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  // creating an index array of objects
  let peopleList = [
    { name: "April", age: 10 },
    { name: "John", age: 63 },
    { name: "Summer", age: 43 },
    { name: "Tim", age: 53 },
    { name: "June", age: 25 },
  ];

  return (
    <div>
      <Header />

      {/* using map to create dynamic html */}
      <ul>
        {peopleList.map((object, index) => {
          return (
            <div key={index}>
              <li
                className={object.age > 50 ? "peopleAbove50" : "peopleBelow50"}
              >
                {object.name} -- {object.age}
              </li>
            </div>
          );
        })}
      </ul>

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
