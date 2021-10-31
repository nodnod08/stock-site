import React, { useState, useEffect } from "react";

export const alertProvider = React.createContext({});

export const AlertContext = ({ children }) => {
  const [show, setShow] = useState(false);
  const [timeOut, setTimeOut] = useState(5);

  const doTimeout = (t) => {
    setTimeout(() => {
      setShow(false);
    }, t * 1000);
  };

  useEffect(() => {
    if (show) {
      doTimeout(timeOut);
    }
  }, [show]);

  return (
    <React.Fragment>
      <alertProvider.Provider value={{ show, setShow, timeOut, setTimeOut }}>
        {children}
      </alertProvider.Provider>
    </React.Fragment>
  );
};
