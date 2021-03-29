import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { current_user_ } from "./reducers/current_user_";
import { app_ } from "./reducers/app_";
import { error_} from "./reducers/error_";
import {profile_ } from "./reducers/profile_";

const reducers = combineReducers({ current_user_, app_, error_, profile_, });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
