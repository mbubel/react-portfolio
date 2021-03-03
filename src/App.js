import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
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
            <Route path="/home" exact component={Home} />
            <Route path="/projects" exact component={Projects} />
          </Switch>

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
