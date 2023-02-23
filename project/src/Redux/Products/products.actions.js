import {
  PRODUCTS_REQUEST,
  PRODUCT_ERROR,
  PRODUCT_ADD,
  PRODUCT_DELETE,
  PRODUCT_UPDATE,
  INCREASE_PAGE,
  GET_LIMITED_PRODUCTS,
 
} from "./products.actions.types";
import {
  DeleteDataApi,
  getDataApi,
  PostDataApi,
  UpdataDataApi,
} from "./products.api";

export const GetProductRequest = () => ({ type: PRODUCTS_REQUEST });
export const ProductsReqErrr = () => ({ type: PRODUCT_ERROR });

export const getLimitedProduct =
  (getProductsParam, pageNo, val) => (dispatch) => {
    dispatch(GetProductRequest());
    getDataApi(getProductsParam, pageNo, val)
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_LIMITED_PRODUCTS, payload: res });
      })
      .catch((er) => {
        dispatch(ProductsReqErrr());
      });
  };

export const updateProduct =
  ({ ...data }) =>
  (dispatch) => {
    dispatch({ type: PRODUCT_UPDATE, payload: data });
    UpdataDataApi({ ...data })
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };
export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_DELETE, payload: id });
  DeleteDataApi(id)
    .then((res) => {
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
    });
};
export const handlePage = (val) => ({ type: INCREASE_PAGE, payload: val });

export const addProduct = (data) => (dispatch) => {
  dispatch({ type: PRODUCT_ADD, payload: data });
  PostDataApi(data)
    .then((res) => {
      console.log(res);
    })
    .catch((er) => {
      console.log(er);
    });
};
