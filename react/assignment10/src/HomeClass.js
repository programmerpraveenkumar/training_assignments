import React, { useEffect } from "react";
import Header from "./Header";
import PeopleList from "./PeopleList";
import CompOne from "./CompOne";
import CompTwo from "./CompTwo";

class HomeClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      nameStorage: "",
      jobStorage: "",
      message: "This is for POST API",
      userList: [],
      id: "",
      createdAt: "",
      getId: "",
      getAvatar: "",
      getFirstName: "",
      getLastName: "",
      getEmail: "",
      getMessage: "",
      pageNo: 1,
      peopleList: [],
      componentOne: false,
      componentTwo: false,
      arrayObjects: [
        { person: "James", age: 45 },
        { person: "Summer", age: 35 },
        { person: "Ryder", age: 25 },
        { person: "Jamie", age: 15 },
      ],
    };
  }

  postApiResponse = () => {
    let param = {
      name: this.state.nameStorage,
      job: this.state.jobStorage,
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
        this.setState({ userList: responseTwo });
        console.log(this.state.userList);
        this.setState({ id: responseTwo["id"] });
        this.setState({ createdAt: responseTwo["createdAt"] });
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  };

  getApiResponse = (page) => {
    fetch("https://reqres.in/api/users?page=" + page)
      .then((response) => response.json())
      .then((responseTwo) => {
        this.setState({ peopleList: responseTwo["data"] });

        if (responseTwo["data"].length == 0) {
          this.setState({ getMessage: "No UserFound" });
        } else {
          this.setState({ getMessage: "" });
        }
      });
  };

  validate = () => {
    if (this.state.name.trim() == "") {
      this.setState({ message: "Please type in your name" });
    } else if (this.state.job.trim() == "") {
      this.setState({ message: "Please type in your job" });
    } else {
      this.setState({ message: "See your results!" });
      this.state.nameStorage = this.state.name;
      this.setState({ name: "" }); // to update a variable and clear the input box
      this.state.jobStorage = this.state.job;
      this.setState({ job: "" });
      this.postApiResponse();
    }
  };

  render() {
    return (
      <div>
        <Header currentMenu="homeclass" />
        <h1>This is a class component</h1>
        {/* Post Method */}
        <h2>{this.state.message}</h2>
        <input
          type="text"
          placeholder="Type Name Here"
          onChange={(e) => this.setState({ name: e.target.value })}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Type Job Here"
          onChange={(e) => this.setState({ job: e.target.value })}
          value={this.state.job}
        />
        <button onClick={this.validate}>Click Me</button>
        <h3>Results:</h3>
        <div>
          <strong>Name: </strong>
          {this.state.nameStorage}
        </div>
        <div>
          <strong>Job: </strong>
          {this.state.jobStorage}
        </div>
        <div>
          <strong>ID: </strong>
          {this.state.id}
        </div>
        <div>
          <strong>Created At: </strong>
          {this.state.createdAt}
        </div>
        {/* Get Method */}
        <h2>This is for Get API</h2>
        <button onClick={this.getApiResponse(this.state.pageNo)}>
          Click for Post API
        </button>
        <select
          onChange={(e) => {
            this.getApiResponse(e.target.value);
            this.setState({ pageNo: e.target.value });
          }}
        >
          <option value="1">Page 1</option>
          <option value="2">Page 2</option>
          <option value="3">Page 3</option>
        </select>
        <h3>{this.state.getMessage}</h3>

        {/* Sharing data with functional component */}
        <PeopleList peopleList={this.state.peopleList} />
        {/* {this.state.peopleList &&
          this.state.peopleList.map((object, index) => {
            return (
              <div>
                <img src={object.avatar} />
                {object.first_name}
              </div>
            );
          })} */}

        {/* Conditional class */}

        <button
          onClick={() => {
            this.setState({ componentOne: true });
          }}
        >
          Show Component One
        </button>
        <button
          onClick={() => {
            this.setState({ componentOne: false });
          }}
        >
          Hide Component One
        </button>
        <button
          onClick={() => {
            this.setState({ componentTwo: true });
          }}
        >
          Show Component Two
        </button>
        <button
          onClick={() => {
            this.setState({ componentTwo: false });
          }}
        >
          Hide Component Two
        </button>

        {this.state.componentOne ? <CompOne /> : null}
        {this.state.componentTwo ? <CompTwo /> : null}

        <tr>
          <td>Name</td>
          <td>Age</td>
        </tr>
        {this.state.arrayObjects.map((object, index) => {
          return (
            <>
              <tr className={object.age > 30 ? "above30" : "below30"}>
                <td>{object.person}</td>
                <td>{object.age}</td>
              </tr>
            </>
          );
        })}
      </div>
    );
  }
}

export default HomeClass;
