import { combineReducers } from "redux";
import getProductsReducer from "./getProducts";
import getCartItemsReducer from "./getCartItems";

export default combineReducers({
  products: getProductsReducer,
  cartItems: getCartItemsReducer,
});
