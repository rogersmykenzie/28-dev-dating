import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateEmail } from "../redux/reducer";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      preferredName: "",
      shouldRedirect: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = () => {
    axios.post("/auth/register", { ...this.state }).then(response => {
      this.props.updateEmail(response.data.email);
      this.setState({ shouldRedirect: true });
    });
  };

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/questions" />;
    }
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

export default connect(undefined, { updateEmail })(Register);
