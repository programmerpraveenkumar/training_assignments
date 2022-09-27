// To use a component, you must import it first
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

function Home() {
  const [userList, setUserList] = useState([]);
  const [userID, setUserID] = useState([]);
  const [userFirstName, setUserFirstName] = useState([]);
  const [userLastName, setUserLastName] = useState([]);
  const [userAvatar, setUserAvatar] = useState([]);
  const [userEmail, setUserEmail] = useState([]);
  const [message, setMessage] = useState("Pick a page");

  const getApiResponse = (pageNo) => {
    setMessage("");
    setUserAvatar("");
    setUserID("");
    setUserEmail("");
    setUserFirstName("");
    setUserLastName("");
    fetch("https://reqres.in/api/users?page=" + pageNo)
      .then((response) => response.json())
      .then((responseTwo) => {
        setUserList(responseTwo["data"]);
        console.log(responseTwo);
        if (responseTwo["data"].length == 0) {
          setMessage("No UserFound");
        }
      });
  };

  const showDetails = (obj) => {
    setUserID("ID: " + obj.id);
    setUserFirstName("First Name: " + obj.first_name);
    setUserLastName("Last Name: " + obj.last_name);
    setUserAvatar(obj.avatar);
    setUserEmail("Email: " + obj.email);
  };

  return (
    <div>
      {/* after importing, you can use the component */}
      <Header currentMenu="home" />
      <h1>Welcome home...</h1>

      <div className="selection">
        <select onChange={(e) => getApiResponse(e.target.value)}>
          <option value="3">Page 3</option>
          <option value="2">Page 2</option>
          <option value="1">Page 1</option>
        </select>
      </div>

      <div className="person-result">{userID}</div>
      <div className="person-result">{userFirstName}</div>
      <div className="person-result">{userLastName}</div>
      <div className="person-result">{userEmail}</div>
      <div className="person-result">
        <img src={userAvatar} />
      </div>

      <div>
        <h1>{message}</h1>
        {userList &&
          userList.map((userObj, idex) => {
            return (
              <div key={idex} onClick={() => showDetails(userObj)}>
                <img src={userObj.avatar} />
                <div className="first-name">{userObj.first_name}</div>
              </div>
            );
          })}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
