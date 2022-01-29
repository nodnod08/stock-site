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

const stepperReducer = (state = INIT_STEP_DATA, action) => {
  switch (action.type) {
    case SET_STEP_ACTIVE:
      return {
        ...state,
        activeStep: action.data,
      };
    case SET_STEP_IS_LAST:
      return {
        ...state,
        isLast: action.data,
      };
    case SET_STEP_IS_FIRST:
      return {
        ...state,
        isFirst: action.data,
      };
    case SET_STEP_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          [action.data.propertyName]: action.data.data,
        },
      };

    case SET_STEP_NEXT_DISABLED:
      return {
        ...state,
        nextDisabled: action.data,
      };

    case SET_STEP_PREV_DISABLED:
      return {
        ...state,
        prevDisabled: action.data,
      };

    case SET_STEP_VALID_STEPS:
      return {
        ...state,
        validSteps: [...state.validSteps, action.data],
      };

    case SET_REMOVE_VALID_STEPS:
      return {
        ...state,
        validSteps: state.validSteps.filter((vs) => vs != action.data),
      };

    case SET_TOTAL_STEP:
      return {
        ...state,
        totalStep: action.data,
      };

    default:
      return state;
  }
};

export default stepperReducer;
