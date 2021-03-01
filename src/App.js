import React, { Component } from "react";
import "./App.css";
import {
  HashRouter,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Router>
          <div className="App">
            <Header />
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    timeout={350}
                    classNames="fade"
                    key={location.key}
                  >
                    <Switch location={location}>
                      <Route path="/react-portfolio/home" exact component={Home} />
                      <Route path="/react-portfolio/about" component={About} />
                      <Route path="/react-portfolio/projects" exact component={Projects} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />

            <Footer />
          </div>
        </Router>
      </HashRouter>
    );
  }
}

export default App;
