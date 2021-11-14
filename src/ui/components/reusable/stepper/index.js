import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setTotalStep,
  prevClick,
} from "@/components/reusable/stepper/store/actions";

function PostItem({ children, stepIcons, stepNames, onClickNext }) {
  const { isLast, isFirst, nextDisabled, activeStep, validSteps } = useSelector(
    (state) => state.stepperReducer
  );
  const dispatch = useDispatch();
  const is_active = (i) => {
    if (i == activeStep)
      return { border: "border-green-500", text: "text-green-500" };
    else {
      if (validSteps.indexOf(i) != -1)
        return { border: "border-green-500", text: "text-green-500" };
      return { border: "border-gray-300", text: "text-gray-300" };
    }
  };

  const is_active_line = (i) => {
    if (i == activeStep)
      return { border: "border-green-500", text: "text-green-500" };
    else {
      if (validSteps.indexOf(i) != -1)
        return { border: "border-green-500", text: "text-green-500" };
      return { border: "border-gray-300", text: "text-gray-300" };
    }
  };

  const onClickPrev = () => {
    dispatch(prevClick(activeStep));
  };

  useEffect(() => {
    dispatch(setTotalStep(stepIcons.length));
  }, []);

  return (
    <div className="custom-container">
      <div className="max-w-xl mx-auto rounded shadow-lg bg-gray-50 p-2 mt-10">
        <div className="p-5">
          <div className="mx-4 p-4">
            <div className="flex items-center">
              {/* loop elements */}
              {stepNames.map((elements, elementIndex) => (
                <React.Fragment key={`stepper-elements-${elementIndex}`}>
                  <div
                    className={`flex items-center transition duration-500 ease-in-out ${
                      is_active(elementIndex).TEXT
                    } relative`}
                  >
                    <div
                      className={`rounded-full transition duration-500 ease-in-out h-12 w-12 flex justify-center items-center border-2 ${
                        is_active(elementIndex).border
                      }`}
                    >
                      <i
                        className={`transition duration-500 ease-in-out ${
                          stepIcons[elementIndex]
                        } ${is_active(elementIndex).text}`}
                      ></i>
                    </div>
                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-300">
                      <span
                        className={`transition duration-500 ease-in-out ${
                          is_active(elementIndex).text
                        }`}
                      >
                        {stepNames[elementIndex]}
                      </span>
                    </div>
                  </div>
                  {/* line */}
                  {elementIndex != stepNames.length - 1 && (
                    <div
                      className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
                        is_active_line(elementIndex + 1).border
                      }`}
                    ></div>
                  )}
                  {/* line */}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="p-7">{children}</div>
        <div className="p-7">
          <button
            disabled={isFirst}
            onClick={onClickPrev}
            className={`btn-info mr-4 ${isFirst ? "btn-disabled" : ""}`}
          >
            <i className="fas fa-arrow-circle-left"></i> Back
          </button>
          <button
            disabled={isLast}
            className={`btn-info ${!isLast ? "" : "btn-disabled"}`}
            onClick={onClickNext}
          >
            <i className="fas fa-arrow-circle-right"></i> Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
