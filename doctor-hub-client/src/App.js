import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import DocForm from "./components/DocForm";
import ListDocs from "./components/ListDocs";
import Doctor from "./components/Doctor";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register/doctor">
              <DocForm />
            </Route>
            <Route exact path="/choosedoctor">
              <ListDocs />
            </Route>
            <Route exact path="/doctor/:id">
              <Doctor />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
