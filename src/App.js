import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" exact component={Projects} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
