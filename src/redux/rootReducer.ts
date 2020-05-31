import { combineReducers } from "redux";
import AppReducer from "./appReducer";
import ColorReducer from "./colorReducer";
export default combineReducers({
  app: AppReducer,
  color: ColorReducer,
});
