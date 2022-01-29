import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { useDispatch, useSelector } from "react-redux";
import validator from "@/hooks/useValidate";
import useCustom from "@/hooks/useCustom";

// redux actions
import {
  nextClick,
  setStepData,
} from "@/components/reusable/stepper/store/actions";

const PriceSupply = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const {
    activeStep,
    totalStep,
    data: stepData,
  } = useSelector((state) => state.stepperReducer);

  let validations = {
    price: {
      validation: ["required"],
    },
    discount: {
      validation: ["required"],
    },
    voucher: {
      validation: ["required"],
    },
    quantity: {
      validation: ["required"],
    },
    is_on_stock: {
      validation: ["required"],
    },
    supply_delivery_interval: {
      validation: ["required"],
    },
  };

  const [data, setData, spreadData, reset] = useCustom({
    price: "",
    discount: "",
    voucher: "",
    quantity: "10",
    is_on_stock: "",
    supply_delivery_interval: "",
  });

  const [errors, errorCount, validate, onFormSubmit] = validator(
    validations,
    data
  );

  const doSubmit = () => {
    onFormSubmit();
    if (!errorCount.current) {
      dispatch(nextClick(activeStep, totalStep));
      dispatch(setStepData({ propertyName: "thirdStep", data }));
    }
  };

  useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      doSubmit();
    },
  }));

  // use to check if step has first data, if so, use it as data persist
  useEffect(() => {
    if (stepData.hasOwnProperty("thirdStep")) {
      spreadData(stepData.thirdStep);
    }
  }, []);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Price"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("price")
              ? errors.price.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="price"
          value={data.price}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Discount Price"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("discount")
              ? errors.discount.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="discount"
          value={data.discount}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Voucher"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("voucher")
              ? errors.voucher.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="voucher"
          value={data.voucher}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Quantity"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("quantity")
              ? errors.quantity.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="quantity"
          value={data.quantity}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        />
      </div>
      <div className="mb-4">
        <select
          placeholder="Is On Stock"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("is_on_stock")
              ? errors.is_on_stock.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="is_on_stock"
          value={data.is_on_stock}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        >
          <option disabled value="">
            -- Select Stock --
          </option>
          <option value="On Stock">On Stock</option>
          <option value="Maybe Tomorrow">Maybe Tomorrow</option>
          <option value="Maybe Next Week">Maybe Next Week</option>
          <option value="Maybe Tomorrow">Maybe Tomorrow</option>
          <option value="No Stock Available">No Stock vailable</option>
        </select>
      </div>
      <div className="mb-4">
        <select
          placeholder="Supply Delivery Interval"
          autoComplete="off"
          className={`input-field-${
            errors.hasOwnProperty("supply_delivery_interval")
              ? errors.supply_delivery_interval.touch
                ? "error"
                : "info"
              : "info"
          }`}
          name="supply_delivery_interval"
          value={data.supply_delivery_interval}
          onChange={(event) => {
            setData(event);
            validate(event);
          }}
        >
          <option disabled value="">
            -- Select Delivery Interval --
          </option>
          <option value="Weekly">Weekly</option>
          <option value="On Call">On Call</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
});

export default PriceSupply;
