import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Heading from "./components/Heading/Heading";
import Wrapper from "./components/Wrapper";

import Search from "./pages/BookSearch";
import Saved from "./pages/SavedBook"

class App extends Component {
 
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Heading />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
        </div>
      </Router>
    )
  };
};

export default App;
