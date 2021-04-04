import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { current_user_ } from "./reducers/current_user_";
import { loading_ } from "./reducers/loading_";
import { error_} from "./reducers/error_";
import { profile_ } from "./reducers/profile_";
import { status_ } from "./reducers/status_";
import { users_ } from "./reducers/users_";


const reducers = combineReducers({ current_user_, loading_, error_, profile_, status_, users_});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
