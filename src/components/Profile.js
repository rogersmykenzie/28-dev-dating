import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Link to="/match">
          <button>Find Your Match!</button>
        </Link>
        <Link to="/questions">
          <button>Settings</button>
        </Link>
      </div>
    );
  }
}

export default Profile;
