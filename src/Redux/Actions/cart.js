import { ADD_PRODUCT_TO_CART } from "../Constants/productManage";

export const addProductToCart = (product) => {
  return async (dispatch, getState) => {
    try {
      let { cartItems } = getState();
      let data = [...cartItems.data, product];
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeProductFromCart = (product) => {
  return async (dispatch, getState) => {
    try {
      let { products } = getState();
      console.log("prodcts", products);
      console.log("product", product);
    } catch (err) {
      console.log(err);
    }
  };
};
