import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "../Constants/getProducts";
import { products } from "../../Utilities/products";

export const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST,
});

export const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  data,
});

export const getProductFailure = (error) => ({
  type: GET_PRODUCT_FAILURE,
  error,
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(getProductRequest());
      // let api = "https://products.com";
      setTimeout(() => {
        dispatch(getProductSuccess(products));
      }, 1000);
    } catch (error) {
      console.log(error);
      dispatch(getProductFailure(error));
    }
  };
};
