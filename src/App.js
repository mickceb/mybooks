import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddBooks} />
        <Route path="/search" component={SearchBooks} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
