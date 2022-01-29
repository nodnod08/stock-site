import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./../../public/assets/css/main.css";
import { HttpContext } from "../context/httpContext";
import { AlertContext } from "../context/alert";
import { AuthorizationContext } from "../context/authorizeContext";
import { PrivateRoute, ProvideAuth } from "./../context/authRoute";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
// Pages
import Index from "./pages";
import Signup from "./pages/signup";
import Login from "./pages/login";
import PostItem from "./pages/postItem";

const App = () => {
  return (
    <Router>
      <AuthorizationContext>
        <AlertContext>
          <HttpContext>
            <Navbar />
            <ProvideAuth>
              <Switch>
                <PrivateRoute showInAuth={false} path="/create-account">
                  <Signup />
                </PrivateRoute>
                <PrivateRoute showInAuth={false} path="/login">
                  <Login />
                </PrivateRoute>
                <PrivateRoute showInAuth={true} path="/post-item">
                  <PostItem />
                </PrivateRoute>
                <Route path="/" component={Index} />
              </Switch>
            </ProvideAuth>
          </HttpContext>
        </AlertContext>
      </AuthorizationContext>
      <Footer />
    </Router>
  );
};

export default App;
