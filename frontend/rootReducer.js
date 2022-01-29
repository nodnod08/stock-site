import { combineReducers } from "redux";
import stepperReducer from "./src/components/reusable/stepper/store/reducers";

const reducers = combineReducers({
  stepperReducer,
});

export default reducers;
