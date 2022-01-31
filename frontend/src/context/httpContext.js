import React, { useState, useContext } from "react";
import axios from "axios";
import { alertProvider } from "./alert";

export const httpContextProvider = React.createContext({});

export const HttpContext = ({ children }) => {
  const { setShow } = useContext(alertProvider);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [data, setData] = useState({
    message: "",
    success: false,
    error: false,
    data: null,
  });

  let uploadProgress = (progressEvent) => {
    let percentCompleted = Math.floor(
      (progressEvent.loaded * 100) / progressEvent.total
    );
    toggleLoadersAndDatas(loading, percentCompleted, data);
  };

  let toggleLoadersAndDatas = (loading, progress, data) => {
    setLoading(loading);
    setProgress(progress);
    setData({
      ...data,
    });
  };
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

  let setCookie = (name, value, days) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  let setJWT = (data) => {
    return new Promise(function (res, rej) {
      res(sessionStorage.setItem("auth.token", data.token));
    });
  };

  let setJWTCookie = (data) => {
    return new Promise(function (res, rej) {
      res(setCookie("auth.token", data.data.token, data.data.days));
    });
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

  let createHeaders = () => {
    let headers = {
      "Content-Type": "multipart/form-data",
    };
    let token = getToken();
    if (token != null && token != "undefined" && token != undefined) {
      headers = {
        ...headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return headers;
  };

  const useAxios = async (path, method, payload = {}) => {
    toggleLoadersAndDatas(true, 50, data);
    axios({
      url: `${process.env.HTTP_API}${path}`,
      method,
      data: payload,
      onUploadProgress: uploadProgress,
      headers: createHeaders(),
    })
      .then((res) => {
        toggleLoadersAndDatas(false, 100, res.data);
        setShow(true);
      })
      .catch((e) => {
        toggleLoadersAndDatas(false, 100, {
          message: e.message,
          success: false,
          error: true,
          data: null,
        });
        setShow(true);
      });
  };

  const objectValues = {
    loading,
    useAxios,
    progress,
    data,
    setJWT,
    setJWTCookie,
  };

  return (
    <React.Fragment>
      <httpContextProvider.Provider value={objectValues}>
        {children}
      </httpContextProvider.Provider>
    </React.Fragment>
  );
};
