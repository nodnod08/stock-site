import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "@/hooks/useValidate";
import useCustom from "@/hooks/useCustom";

// redux actions
import {
  nextClick,
  setStepData,
} from "@/components/reusable/stepper/store/actions";

const PrimaryDetails = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const {
    activeStep,
    totalStep,
    data: stepData,
  } = useSelector((state) => state.stepperReducer);

  let validations = {
    category: {
      validation: ["required"],
    },
    made_in: {
      validation: ["required"],
    },
    brand: {
      validation: ["required"],
    },
    months_of_use: {
      validation: ["required"],
    },
    status: {
      validation: ["required"],
    },
    serial_number: {
      validation: ["required"],
    },
    mall_store_price: {
      validation: ["required"],
    },
    model_number: {
      validation: ["required"],
    },
  };

  const [data, setData, spreadData, reset] = useCustom({
    category: "",
    made_in: "",
    brand: "",
    months_of_use: "",
    status: "",
    mall_store_price: "",
    serial_number: "",
    model_number: "",
  });

  const [errors, errorCount, validate, onFormSubmit] = validator(
    validations,
    data
  );

  const doSubmit = () => {
    onFormSubmit();
    if (!errorCount.current) {
      dispatch(nextClick(activeStep, totalStep));
      dispatch(setStepData({ propertyName: "firstStep", data }));
    }
  };

  useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      doSubmit();
    },
  }));

  // use to check if step has first data, if so, use it as data persist
  useEffect(() => {
    if (stepData.hasOwnProperty("firstStep")) {
      spreadData(stepData.firstStep);
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <select
          placeholder="Category"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("category")
              ? errors.category.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="category"
          value={data.category}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        >
          <option disabled value="">
            -- Select Category --
          </option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Tablet">Tablet</option>
          <option value="Desktop">Desktop</option>
          <option value="Software">Software</option>
          <option value="Program">Program</option>
          <option value="Cable/Port">Cable / Port</option>
          <option value="ProductKey(s)">Product Key(s)</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Brand"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("brand")
              ? errors.brand.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="brand"
          value={data.brand}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Made In"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("made_in")
              ? errors.made_in.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="made_in"
          value={data.made_in}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Months Of Used"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("months_of_use")
              ? errors.months_of_use.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="months_of_use"
          value={data.months_of_use}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <select
          placeholder="Status"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("status")
              ? errors.status.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="status"
          value={data.status}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        >
          <option disabled value="">
            -- Select Status --
          </option>
          <option value="Working">Working</option>
          <option value="Light Defect">Light Defect</option>
          <option value="Parts To Replace">Parts To Replace</option>
        </select>
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Mall Store Price"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("mall_store_price")
              ? errors.mall_store_price.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="mall_store_price"
          value={data.mall_store_price}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Serial Number"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("serial_number")
              ? errors.serial_number.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="serial_number"
          value={data.serial_number}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Model Number"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("model_number")
              ? errors.model_number.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="model_number"
          value={data.model_number}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
    </div>
  );
});

export default PrimaryDetails;
