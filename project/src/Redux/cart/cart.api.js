import axios from "axios";

export const getCartProductAPI = async () => {
  const res = await axios.get(`http://localhost:8080/cart`);
  return res.data;
};

export const addToCartAPI = async (payload) => {
  try {
    const res = await axios.post(`http://localhost:8080/cart`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const removeCartItemAPI = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8080/cart/${id}`);
  } catch (error) {
    console.log(error);
  }
};
