import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { authorizationProvider } from "./authorizeContext";

export const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const { authorization } = useContext(authorizationProvider);
  const { isAuthorized, wasChecked } = authorization;

  return (
    <authContext.Provider value={{ isAuthorized, wasChecked }}>
      {children}
    </authContext.Provider>
  );
};

export const PrivateRoute = ({ children, showInAuth, ...rest }) => {
  const { authorization } = useContext(authorizationProvider);
  const { isAuthorized, wasChecked } = authorization;

  return (
    wasChecked && (
      <Route
        {...rest}
        render={({ location }) => {
          if (showInAuth) {
            return isAuthorized ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            );
          } else {
            return !isAuthorized ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            );
          }
        }}
      />
    )
  );
};
