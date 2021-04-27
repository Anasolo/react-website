import React from "react";
import NavBar from "./components/Navbar";
import SideBar from "./components/Sidebar";
import Home from "./components/HomePage/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
