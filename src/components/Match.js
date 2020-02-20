import React from "react";
import axios from "axios";

class Match extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    axios.get("/api/love").then(response => {
      const { first_name, last_name, preferred_name } = response.data;

      if (preferred_name) {
        this.setState({ name: preferred_name + " " + last_name });
      } else {
        this.setState({ name: first_name + " " + last_name });
      }
    });
  }
  render() {
    return <h1>You matched with {this.state.name}!</h1>;
  }
}

export default Match;
