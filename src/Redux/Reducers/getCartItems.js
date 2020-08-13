import * as constants from "../Constants/productManage";

const initialState = {
  data: [],
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case constants.ADD_PRODUCT_TO_CART:
      return { ...state, data: actions.data };

    case constants.REMOVE_PRODUCT_FROM_CART:
      return { ...state, data: actions.data };

    default:
      return state;
  }
}
