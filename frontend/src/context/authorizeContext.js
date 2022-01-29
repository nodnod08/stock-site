import React, { useState, useEffect } from "react";
import axios from "axios";

export const authorizationProvider = React.createContext({
  isAuthorized: false,
  user: {
    firstName: null,
    lastName: null,
    email: null,
    id: null,
  },
});

export const AuthorizationContext = ({ children }) => {
  const [authorization, setAuthorization] = useState({
    isAuthorized: false,
    wasChecked: false,
    user: {
      firstName: null,
      lastName: null,
      email: null,
      id: null,
    },
  });

  let getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  let getToken = () => {
    if (sessionStorage.hasOwnProperty("auth.token")) {
      return sessionStorage.getItem("auth.token");
    }

    if (document.cookie.indexOf("auth.token") != -1) {
      return getCookie("auth.token");
    }

    return null;
  };

  const checkAuthorization = () => {
    axios
      .post(`${process.env.HTTP_API}/api/user/check-authentication`, {
        token: getToken(),
      })
      .then((res) => {
        if (res.data.success) {
          const { firstName, lastName, email, id } = res.data.data.details;
          setAuthorization({
            isAuthorized: true,
            wasChecked: true,
            user: {
              firstName,
              lastName,
              email,
              id,
            },
          });
        } else {
          setAuthorization({
            ...authorization,
            wasChecked: true,
          });
        }
      });
  };

  return (
    <React.Fragment>
      <authorizationProvider.Provider
        value={{ authorization, setAuthorization, checkAuthorization }}
      >
        {children}
      </authorizationProvider.Provider>
    </React.Fragment>
  );
};
