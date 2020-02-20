import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      preferredName: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    axios.post("/auth/register").then(response => {});
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name="email" placeholder="Email" />
        <input
          onChange={this.handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <input
          onChange={this.handleChange}
          name="firstName"
          placeholder="First Name"
        />
        <input
          onChange={this.handleChange}
          name="lastName"
          placeholder="Last Name"
        />
        <input
          onChange={this.handleChange}
          name="preferredName"
          placeholder="Preferred Name"
        />
        <button onClick={this.handleClick}>Register!</button>
      </div>
    );
  }
}

export default Register;
