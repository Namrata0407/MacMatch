import {
  addToCartAPI,
  addToOrderItemAPI,
  emptyCartAPI,
  getCartProductAPI,
  removeCartItemAPI,
  updateCartItemAPI,
} from "./cart.api";
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
    type: types.ADD_TO_CART_SUCCESS,
    payload,
  };
};

/*---------- Not using these 3 types --------------- */
const deleteCart = (id) => {
  return {
    type: types.DELETE_CART_SUCCESS,
    payload: id,
  };
};

const updateCart = (id, val) => {
  return {
    type: types.UPDATE_CART_SUCCESS,
    payload: { id, val },
  };
};

const addToOrder = (payload) => {
  return {
    type: types.ADD_ORDER_SUCCESS,
    payload,
  };
};
/*---------- Not using these types --------------- */

export const getCartProduct = () => async (dispatch) => {
  try {
    dispatch(cartRequest());
    let res = await getCartProductAPI();
    dispatch(getCartSuccess(res));
  } catch (err) {
    dispatch(cartError());
  }
};

export const addToCartFn = (payload) => async (dispatch) => {
  dispatch(addToCart(payload));
  try {
    dispatch(cartRequest());
    const res = await addToCartAPI(payload);
    dispatch(getCartProduct());
    // dispatch(addToCart(res));
  } catch (error) {
    dispatch(cartError());
  }
};

export const removeCartItem = (id) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await removeCartItemAPI(id);
    dispatch(getCartProduct());
    // dispatch(deleteCart(id));
  } catch (error) {
    dispatch(cartError());
  }
};

export const updateCartItem = (id, val) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await updateCartItemAPI(id, val);
    dispatch(getCartProduct());
  } catch (error) {
    dispatch(cartError());
  }
};

export const addToOrderItem = (payload) => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await addToOrderItemAPI(payload);
  } catch (error) {
    dispatch(cartError());
  }
};

export const emptyCart = () => async (dispatch) => {
  try {
    dispatch(cartRequest());
    const res = await emptyCartAPI();
  } catch (error) {
    dispatch(cartError());
  }
};
