import {
  SET_STEP_ACTIVE,
  SET_STEP_IS_LAST,
  SET_STEP_IS_FIRST,
  SET_STEP_NEXT_DISABLED,
  SET_STEP_PREV_DISABLED,
  SET_STEP_VALID_STEPS,
  SET_STEP_DATA,
  INIT_STEP_DATA,
  SET_REMOVE_VALID_STEPS,
  SET_TOTAL_STEP,
} from "./constants";

export const setStepActive = (data) => ({ type: SET_STEP_ACTIVE, data });
export const setStepValidSteps = (data) => ({
  type: SET_STEP_VALID_STEPS,
  data,
});
export const setStepIsLast = (data) => ({
  type: SET_STEP_IS_LAST,
  data,
});
export const setStepIsFirst = (data) => ({
  type: SET_STEP_IS_FIRST,
  data,
});
export const setStepPrevDisabled = (data) => ({
  type: SET_STEP_PREV_DISABLED,
  data,
});
export const setStepNextDisabled = (data) => ({
  type: SET_STEP_NEXT_DISABLED,
  data,
});
export const setRemoveValidSteps = (data) => ({
  type: SET_REMOVE_VALID_STEPS,
  data,
});

export const setTotalStep = (data) => ({
  type: SET_TOTAL_STEP,
  data,
});

export const setStepData = ({ propertyName, data }) => ({
  type: SET_STEP_DATA,
  data: {
    data,
    propertyName,
  },
});

export const nextClick = (activeStep, totalStep) => (dispatch) => {
  let AS = activeStep;
  dispatch(setStepActive(AS + 1));
  dispatch(setStepValidSteps(AS));
  dispatch(setStepIsFirst(false));
  dispatch(setStepPrevDisabled(false));
  if (totalStep == AS + 1 + 1) {
    dispatch(setStepNextDisabled(true));
    dispatch(setStepIsLast(true));
  }
};

export const prevClick = (activeStep) => (dispatch) => {
  let AS = activeStep;
  dispatch(setStepActive(AS - 1));
  dispatch(setRemoveValidSteps(AS));
  if (AS - 1 == 0) {
    dispatch(setStepIsFirst(true));
    dispatch(setStepPrevDisabled(true));
  }
  dispatch(setStepNextDisabled(false));
  dispatch(setStepIsLast(false));
};
