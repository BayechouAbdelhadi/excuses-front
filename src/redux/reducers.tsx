import { combineReducers } from "@reduxjs/toolkit";
import excusesReducer from "./slices/excusesSlice";

const rootReducer = combineReducers({
    excuses: excusesReducer,
});
export default rootReducer;