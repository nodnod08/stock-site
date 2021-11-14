import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducer";

let middleware = applyMiddleware(thunk);

// if (process.env.NODE_ENV === "development") {
const { composeWithDevTools } = require("redux-devtools-extension");
middleware = composeWithDevTools(middleware);
// }

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
