import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function About() {
  const btn_click = () => {
    setUserID("");
    setCreatedTime("");
    if (nameVariable.trim() == "") {
      setErrorMessage("Type in your name");
    } else if (jobVariable.trim() == "") {
      setErrorMessage("Type in your job");
    } else {
      setErrorMessage("The Results:");
      getApiResponse();
    }
  };

  // declaring a new state variable called name
  const [nameVariable, setNameVariable] = useState(""); // the default is an empty string
  const [jobVariable, setJob] = useState("");
  const [id, setUserID] = useState("");
  const [createdTime, setCreatedTime] = useState("");
  const [errorMessage, setErrorMessage] = useState(
    "This will hold the error messages"
  );
  const [userList, setUserList] = useState([]);

  const getApiResponse = () => {
    let param = {
      name: nameVariable,
      job: jobVariable,
    };
    fetch("https://reqres.in/api/users", {
      method: "POST",
      body: JSON.stringify(param),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseTwo) => {
        setUserList(responseTwo["data"]);
        console.log(responseTwo["id"]);
        console.log(responseTwo["createdAt"]);
        showDetails(responseTwo);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  };

  const showDetails = (obj) => {
    setUserID(obj.id);
    setCreatedTime(obj.createdAt);
  };

  return (
    <div>
      <Header />
      <h1>About the important things in life...</h1>

      <div className="center">
        <input
          onChange={(e) => setNameVariable(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          onChange={(e) => setJob(e.target.value)}
          type="text"
          placeholder="Enter Your Job"
        />
        <button onClick={btn_click}>Click to use Post Method</button>
      </div>

      <h1>{errorMessage}</h1>
      <p>
        <strong>id: </strong>
        {id}
      </p>
      <p>
        <strong>created At: </strong>
        {createdTime}
      </p>
      <p>
        <strong>name: </strong>
        {nameVariable}
      </p>
      <p>
        <strong>job: </strong>
        {jobVariable}
      </p>
      <Footer />
    </div>
  );
}

export default About;
