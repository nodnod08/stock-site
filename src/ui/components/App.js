import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./../assets/css/main.css";
import { HttpContext } from "../context/httpContext";
import { AlertContext } from "../context/alert";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
// Pages
import Index from "./pages";
import Signup from "./pages/signup";
import Login from "./pages/login";

const App = () => {
  return (
    <Router>
      <AlertContext>
        <HttpContext>
          <Navbar />
          <Switch>
            <Route path="/create-account" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Index} />
          </Switch>
        </HttpContext>
      </AlertContext>
      <Footer />
    </Router>
  );
};

export default App;
