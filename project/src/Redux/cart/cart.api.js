import axios from "axios";

export const getCartProductAPI = async () => {
  const res = await axios.get(`https://thankful-loafers-hare.cyclic.app/carts`);
  return res.data;
};

export const addToCartAPI = async (payload) => {
  try {
    const res = await axios.post(
      `https://thankful-loafers-hare.cyclic.app/carts`,
      payload
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCartItemAPI = async (id, val) => {
  try {
    const res = await axios.patch(
      `https://thankful-loafers-hare.cyclic.app/carts/${id}`,
      {
        quantity: val,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItemAPI = async (id) => {
  try {
    const res = await axios.delete(
      `https://thankful-loafers-hare.cyclic.app/carts/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};
