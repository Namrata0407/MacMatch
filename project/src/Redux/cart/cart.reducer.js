import * as types from "./cart.types";

const initialValue = {
  isLoading: false,
  isError: false,
  cart: [],
  order: [],
};

export const reducer = (state = initialValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CART_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };

    case types.CART_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADD_TO_CART:
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, payload],
      };

    default:
      return state;
  }
};
