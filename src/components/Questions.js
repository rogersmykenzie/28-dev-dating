import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Questions extends React.Component {
  constructor() {
    super();
    this.state = {
      q1Answers: [
        "C",
        "C#",
        "Javascript",
        "PHP",
        "C++",
        "Java",
        "Python",
        "Ruby",
        "SQL",
        "Rust",
        "Haskell",
        "Assembly",
        "Lisp"
      ],
      q2Answers: ["Mac", "Windows", "Linux"],
      q3Answers: ["Front End", "Back End", "Full Stack"],
      q1Picked: "C",
      q2Picked: "Mac",
      q3Picked: "Front End",
      redirect: false
    };
  }

  handleClick = () => {
    axios
      .put("/api/questions", {
        q1Picked: this.state.q1Picked,
        q2Picked: this.state.q2Picked,
        q3Picked: this.state.q3Picked,
        email: this.props.email
      })
      .then(response => {
        this.setState({ redirect: true });
      });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <h1>Question 1: What is your favorite language?</h1>
        <select onChange={e => this.setState({ q1Picked: e.target.value })}>
          {this.state.q1Answers.map(answer => (
            <option>{answer}</option>
          ))}
        </select>
        <h1>Question 2: What is your favorite OS?</h1>
        <select onChange={e => this.setState({ q2Picked: e.target.value })}>
          {this.state.q2Answers.map(answer => (
            <option>{answer}</option>
          ))}
        </select>
        <h1>Question 3: What dicipline of development do you most prefer?</h1>
        <select onChange={e => this.setState({ q3Picked: e.target.value })}>
          {this.state.q3Answers.map(answer => (
            <option>{answer}</option>
          ))}
        </select>
        <br />
        <button onClick={this.handleClick}>Save</button>
        <Link to="/profile">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    email: reduxState.email
  };
}

export default connect(mapStateToProps)(Questions);
