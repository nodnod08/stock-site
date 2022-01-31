import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "@/hooks/useValidate";
import useCustom from "@/hooks/useCustom";
import InputFile from "@/components/reusable/inputFile";

// redux actions
import {
  nextClick,
  setStepData,
} from "@/components/reusable/stepper/store/actions";

const MainSpec = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const {
    activeStep,
    totalStep,
    data: stepData,
  } = useSelector((state) => state.stepperReducer);

  let validations = {
    product_name: {
      validation: ["required"],
    },
    product_code: {
      validation: ["required"],
    },
    length: {
      validation: ["required"],
    },
    width: {
      validation: ["required"],
    },
    color: {
      validation: ["required"],
    },
    weight: {
      validation: ["required"],
    },
    image: {
      validation: ["required"],
    },
    image2: {
      validation: ["required"],
    },
  };

  const [data, setData, spreadData, reset] = useCustom({
    product_name: "Software 1",
    product_code: "Software code",
    length: "12 inches",
    width: "10 inches",
    color: "White",
    weight: "500 grams/ .5kg",
    image: {
      fileName: "",
      value: "",
    },
    image2: {
      fileName: "",
      value: "",
    },
  });

  const [errors, errorCount, validate, onFormSubmit] = validator(
    validations,
    data
  );

  const doSubmit = () => {
    onFormSubmit();
    if (!errorCount.current) {
      dispatch(nextClick(activeStep, totalStep));
      dispatch(setStepData({ propertyName: "secondStep", data }));
    }
  };

  useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      doSubmit();
    },
  }));

  // use to check if step has first data, if so, use it as data persist
  useEffect(() => {
    if (stepData.hasOwnProperty("secondStep")) {
      spreadData(stepData.secondStep);
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Name"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("product_name")
              ? errors.product_name.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="product_name"
          value={data.product_name}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Product Code"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("product_code")
              ? errors.product_code.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="product_code"
          value={data.product_code}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Length"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("length")
              ? errors.length.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="length"
          value={data.length}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Width"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("width")
              ? errors.width.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="width"
          value={data.width}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Color"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("color")
              ? errors.color.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="color"
          value={data.color}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Weight"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("weight")
              ? errors.weight.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="weight"
          value={data.weight}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <InputFile
          type="file"
          placeholder="First Image"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("image")
              ? errors.image.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="image"
          fileName={data.image.fileName}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
      <div className="mb-4">
        <InputFile
          type="file"
          placeholder="Second Image"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("image2")
              ? errors.image2.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="image2"
          fileName={data.image2.fileName}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
          accept="image/png, image/gif, image/jpeg"
        />
      </div>
    </div>
  );
});

export default MainSpec;
