import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about/">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
