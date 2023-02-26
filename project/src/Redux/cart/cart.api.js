import axios from "axios";

export const getCartProductAPI = async () => {
  const res = await axios.get(`https://mockserver-rny6.onrender.com/carts`);
  return res.data;
};

export const addToCartAPI = async (payload) => {
  try {
    const res = await axios.post(
      `https://mockserver-rny6.onrender.com/carts`,
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
      `https://mockserver-rny6.onrender.com/carts/${id}`,
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
      `https://mockserver-rny6.onrender.com/carts/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const addToOrderItemAPI = async (payload) => {
  try {
    const res = await axios.post(
      `https://mockserver-rny6.onrender.com/orders`,
      payload
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const emptyCartAPI = async (id) => {
  // try {
  //   let res = await axios.put(`https://mockserver-rny6.onrender.com/carts`, []);
  //   return res.data;
  // } catch (error) {
  //   console.log(error);
  // }

  axios
    .delete(`https://mockserver-rny6.onrender.com/carts/${id}`)
    .then((response) => {
      console.log("Data has been emptied");
    })
    .catch((error) => {
      console.error("Error emptying data:", error);
    });
};
