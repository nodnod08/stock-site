import React, { useState, useEffect, useRef } from "react";

const test = (validations, data) => {
  const [errors, setErrors] = useState({});
  const errorCount = useRef(0);
  const setErrors2 = (field, error, message) => {
    if (!error) {
      let oldErrors = { ...errors };
      delete oldErrors[field];
      setErrors({
        ...oldErrors,
      });
      return false;
    }
    errorCount.current++;
    setErrors({
      ...errors,
      [field]: {
        ...errors[field],
        touch: true,
        message,
        error,
      },
    });
  };

  let validateField = (field, value) => {
    let message = "",
      error = false;

    setErrors2(field, error, message);

    if (validations[field].validation.includes("required")) {
      if (!value) {
        message = "This field is required";
        error = true;
      }
    }

    if (validations[field].validation.includes("email")) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(value).toLowerCase())) {
        message = "This field is required to be an email format";
        error = true;
      }
    }

    setErrors2(field, error, message);
  };

  let validate = (event) => {
    event.persist();
    if (event.target.type == "file") {
      validateField(event.target.name, {
        fileName: event.target.files[0].name,
        value: event.target.files[0],
      });
    } else {
      validateField(event.target.name, event.target.value);
    }
  };

  let validateAndReturn = (field, value) => {
    let message = "",
      error = false;

    if (validations[field].validation.includes("required")) {
      if (!value) {
        message = "This field is required";
        error = true;
      }
    }

    if (validations[field].validation.includes("email")) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(String(value).toLowerCase())) {
        message = "This field is required to be an email format";
        error = true;
      }
    }

    return {
      error,
      message,
    };
  };

  let onSubmit = () => {
    errorCount.current = 0;
    Object.keys(data).map((field) => {
      let { error, message } = validateAndReturn(field, data[field]);
      if (error) {
        errorCount.current++;
        setErrors((prevState) => {
          return {
            ...prevState,
            [field]: {
              touch: true,
              message,
              error,
            },
          };
        });
      }
    });
  };

  return [errors, errorCount, validate, onSubmit];
};

export default test;
