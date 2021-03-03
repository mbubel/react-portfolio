import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Header />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
