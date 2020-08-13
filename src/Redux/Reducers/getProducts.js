import * as constants from "../Constants/getProducts";

const initialState = {
  data: [],
  error: false,
  loading: false,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case constants.GET_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case constants.GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: actions.data };

    case constants.GET_PRODUCT_FAILURE:
      return { ...state, loading: false, error: actions.error };
    default:
      return state;
  }
}
