import { combineReducers } from "redux";
import { Reducer_Selected_Product } from "./Reducers";
import { Reducer_ShoppingCart } from "./Reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whiteList: ["", "S_Product","shopping_card"],
};
const rootReducer = combineReducers({
  Selected_Product: Reducer_Selected_Product,
  ShoppingCart: Reducer_ShoppingCart,
});
export default persistReducer(persistConfig, rootReducer);
