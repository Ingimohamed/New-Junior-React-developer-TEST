import { combineReducers } from "redux";
import { Reducer_Selected_Product } from "./Reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["", "S_Product"],
};
const rootReducer = combineReducers({
  Selected_Product: Reducer_Selected_Product,
});
export default persistReducer(persistConfig, rootReducer);
