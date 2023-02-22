import { addToCartAPI, getCartProductAPI, removeCartItemAPI } from "./cart.api";
import * as types from "./cart.types";

const cartRequest = () => {
  return {
    type: types.CART_ERROR,
  };
};

const cartError = () => {
  return {
    type: types.CART_ERROR,
  };
};

const getCartSuccess = (payload) => {
  return {
    type: types.GET_CART_SUCCESS,
    payload,
  };
};

const addToCart = (payload) => {
  return {
    type: types.ADD_TO_CART,
    payload,
  };
};

export const getCartProduct = () => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await getCartProductAPI();
    dispatch(getCartSuccess(res));
  } catch (err) {
    dispatch(cartError());
  }
};

export const addToCartFn = (payload) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await addToCartAPI(payload);
    dispatch(addToCart(res));
  } catch (error) {
    dispatch(cartError());
  }
};

export const removeCartItem = (id) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await removeCartItemAPI(id);
  } catch (error) {
    dispatch(cartError());
  }
};
