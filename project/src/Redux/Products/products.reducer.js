import {
  PRODUCTS_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_ERROR,
  PRODUCT_ADD,
  PRODUCT_DELETE,
  PRODUCT_UPDATE,
  INCREASE_PAGE,
  GET_TOTAL_PRODUCTS,
  GET_LIMITED_PRODUCTS
} from "./products.actions.types";

const initialState = {
  loading: false,
  error: false,
  totalProducts:[],
  products: [],
  page:1
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case PRODUCT_SUCCESS: {
     
      return {
        ...state,
        loading: false,
        totalProducts: payload,
      };
    }
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TOTAL_PRODUCTS:{
      return{
        ...state,loading:false,totalProducts:payload

      }
    }
    case GET_LIMITED_PRODUCTS:{
      return{
        ...state,products:payload
      }
    }
    case PRODUCT_ADD:{
      return{
        ...state,totalProducts:[...state.totalProducts,payload]
      }
    }
    case PRODUCT_UPDATE:{
      let data=state.totalProducts.map((el)=>el.id===payload.id ?{...payload}:el)
      return{
        ...state,totalProducts:data
      }
    }
    case PRODUCT_DELETE:{
      let data=state.totalProducts.filter((el)=>el.id!==payload);
      return{
        ...state,totalProducts:data
      }
    }
    case INCREASE_PAGE:{
      console.log(payload,"red")
      return{
        ...state,page:payload
      }
    }
    default: {
      return {
        state,
      };
    }
  }
};
