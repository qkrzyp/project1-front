import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./store/reducers/auth";
import cartReducer from "./store/reducers/cart";
import searchReducer from "./store/reducers/search";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  search: searchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

export type RootState = ReturnType<typeof rootReducer>;

ReactDOM.render(app, document.getElementById("root"));
