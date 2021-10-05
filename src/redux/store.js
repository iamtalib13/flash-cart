import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewalres = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewalres));

export default store;
