import { createStore, combineReducers, applyMiddleware } from "redux";
import reducerAddBooks from "./reducers/reducerAddBooks";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  library: reducerAddBooks,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
