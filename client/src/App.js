import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
// End Pages

// CSS
import "./App.css";

// Components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
// End Components

class App extends Component {
  state = {
    page: "home",
    saved: [],
    searchTerm: ""
  }; // Don't know how much I need of this

  componentDidMount() {
    console.log("component mounted");
    console.log("state:", this.state);
  }

  // Methods

  // End Methods

  render() {
    return (
      <Router>
        <div className="page-wrapper">
          <NavBar />
          <Hero />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
