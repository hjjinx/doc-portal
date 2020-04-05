import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Review from "./components/Review";
import DocForm from "./components/DocForm";
import loadScript from "./loadScript";

class App extends React.Component {
  state = {
    hasRefreshed: false
  };
  handlePageChange = () => {
    if (!this.state.hasRefreshed) {
      window.location.reload();
      this.setState({ hasRefreshed: true });
      setTimeout(() => this.setState({ hasRefreshed: false }), 5000);
    }
    console.log("HERE");
  };

  render() {
    return (
      <div>
        <base href="/"></base>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                // this.handlePageChange();
                return <Home />;
              }}
            ></Route>
            <Route
              exact
              path="/register/doctor"
              render={() => {
                // this.handlePageChange();
                return <DocForm />;
              }}
            ></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
