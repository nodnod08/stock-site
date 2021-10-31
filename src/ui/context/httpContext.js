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

  const useAxios = async (url, method, payload = {}) => {
    toggleLoadersAndDatas(true, 50, data);
    axios({
      url,
      method,
      data: payload,
      onUploadProgress: uploadProgress,
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
  };

  return (
    <React.Fragment>
      <httpContextProvider.Provider value={objectValues}>
        {children}
      </httpContextProvider.Provider>
    </React.Fragment>
  );
};
