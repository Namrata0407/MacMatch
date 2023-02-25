import * as types from "./cart.types";

const initialValue = {
  cart: [],
  order: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialValue, action) => {
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

    case types.ADD_TO_CART_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        cart: [...state.cart, payload],
      };

    case types.DELETE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: state.cart.filter((item) => item.id !== payload),
      };

    case types.UPDATE_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cart: state.cart.map((item) => {
          return item.id === payload.id ? (item.id = payload.val) : item;
        }),
      };

    case types.ADD_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: [...state.order, payload],
      };

    default:
      return state;
  }
};

export { reducer };
