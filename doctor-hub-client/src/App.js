import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Review from "./components/Review";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
