import React, { useState } from "react";

function useForm(initialState) {
  const [state, setState] = useState(initialState);

  const handleState = (e) => {
    e.persist();
    let type = e.target.type;
    switch (type) {
      case "password":
        setState(e.target.value);
        break;
      case "email":
        setState(e.target.value);
        break;
      case "text":
        setState(e.target.value);
        break;
      case "number":
        setState(e.target.value);
        break;
      case "select":
        setState(e.target.value);
        break;
      case "file":
        setState({
          fileName: e.target.files[0].name,
          value: e.target.files[0],
        });
        break;
      default:
        setState(e.target.checked);
        break;
    }
  };

  return [state, handleState];
}

export default useForm;
