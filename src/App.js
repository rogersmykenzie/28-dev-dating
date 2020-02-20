import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
  render() {
    return <HashRouter>{routes}</HashRouter>;
  }
}

export default App;
