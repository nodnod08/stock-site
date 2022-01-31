import React, { useRef, useContext } from "react";
import { useSelector } from "react-redux";
import Stepper from "@/components/reusable/stepper";
import Alert from "./../../partials/Alert";
import { httpContextProvider } from "../../../context/httpContext";
import { authorizationProvider } from "./../../../context/authorizeContext";
import { alertProvider } from "./../../../context/alert";

import PrimaryDetails from "./PrimaryDetails";
import MainSpec from "./MainSpec";
import PriceAndSupply from "./PriceAndSupply";
import Confirmation from "./Confirmation";

function PostItem() {
  const { activeStep, data: stepData } = useSelector(
    (state) => state.stepperReducer
  );
  const { loading, useAxios, progress, data, setJWT, setJWTCookie } =
    useContext(httpContextProvider);

  const { show } = useContext(alertProvider);

  const { authorization } = useContext(authorizationProvider);

  const stepNames = [
    "Primary Details",
    "Main Specifications",
    "Price And Supply",
    "Confirmation",
  ];

  const stepNamesAsConfirmation = [
    "Primary Details",
    "Main Specifications",
    "Price And Supply",
  ];

  const stepIcons = [
    "fas fa-info-circle",
    "fas fa-list-ol",
    "fas fa-money-bill-wave",
    "fas fa-check-circle",
  ];

  const saveItem = async () => {
    let formData = new FormData();
    formData.append("user_id", authorization.user.id);

    await new Promise((resolve, reject) => {
      resolve(
        Object.keys(stepData).map((step, index) => {
          Object.keys(stepData[step]).forEach((property, index2) => {
            formData.append(
              property,
              typeof stepData[step][property] == "object"
                ? stepData[step][property].value
                : stepData[step][property]
            );
          });
        })
      );
    });

    let response = await useAxios(`/api/item/post-item`, "post", formData);
  };

  const onClickNext = () => {
    switch (activeStep) {
      case 0:
        primaryDetailsRef.current.triggerSubmit();
        break;
      case 1:
        mainSpecRef.current.triggerSubmit();
        break;
      case 2:
        priceAndSupplyRef.current.triggerSubmit();
        break;
      default:
        saveItem();
        break;
    }
  };

  const primaryDetailsRef = useRef();
  const mainSpecRef = useRef();
  const priceAndSupplyRef = useRef();

  return (
    <div className="custom-container mt-6">
      <div className="max-w-xl mx-auto">
        <p className="text-lg font-medium">POST ITEM</p>
        <p className="text-sm">
          Fill all the required details, make sure that you are verified seller
          so you can successfuly post an Item for selling
        </p>
        {show && (
          <Alert
            className="mt-3"
            type={data.success ? "success" : "error"}
            message={data.message}
            heading={data.success ? "Item Posted!" : "Error occured!"}
          />
        )}
      </div>
      <Stepper
        stepNames={stepNames}
        stepIcons={stepIcons}
        onClickNext={onClickNext}
      >
        {activeStep == 0 && <PrimaryDetails ref={primaryDetailsRef} />}
        {activeStep == 1 && <MainSpec ref={mainSpecRef} />}
        {activeStep == 2 && <PriceAndSupply ref={priceAndSupplyRef} />}
        {activeStep == 3 && (
          <Confirmation stepNames={stepNamesAsConfirmation} />
        )}
      </Stepper>
    </div>
  );
}

export default PostItem;
