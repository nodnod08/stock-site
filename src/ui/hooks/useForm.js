import React, { useState } from "react";

function useForm(initialState) {
  const [state, setState] = useState(initialState);

  const handleState = (e) => {
    setState(e.target.value);
  };

  return [state, handleState];
}

export default useForm;
