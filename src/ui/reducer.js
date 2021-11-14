import { combineReducers } from "redux";
import stepperReducer from "./components/reusable/stepper/store/reducers";

const reducers = combineReducers({
  stepperReducer,
});

export default reducers;
