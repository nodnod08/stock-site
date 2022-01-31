import React, { useState } from "react";

const handleState = (initial) => {
  const [state, setState] = useState(initial);

  const handleChange = (event) => {
    if (event.target.type == "file") {
      setState({
        ...state,
        [event.target.name]: {
          fileName: event.target.files[0].name,
          value: event.target.files[0],
        },
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  };

  const reset = (event) => {
    setState({
      ...state,
      [event.target.name]: "",
    });
  };

  const spreadData = (data) => {
    setState({
      ...state,
      ...data,
    });
  };

  return [state, handleChange, spreadData, reset];
};

export default handleState;
