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

let initialState = {
  loading: false,
  page:1,
  error: false,
  productCount:0,
  products: [],
  
};
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

 
    case PRODUCT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
  
    case GET_LIMITED_PRODUCTS:{
      return{
        ...state,products:payload.data,productCount:payload.headers["x-total-count"]
      }
    }
    case PRODUCT_ADD:{
      return{
        ...state,products:[...state.products,payload]
      }
    }
    case PRODUCT_UPDATE:{
      let data=state.products.map((el)=>el.id===payload.id?payload:el)
      return{
        ...state,products:data
      }
    }
    case PRODUCT_DELETE:{
      let data=state.products.filter((el)=>el.id!==payload);
      return{
        ...state,products:data
      }
    }
    case INCREASE_PAGE:{
   
      return{
        ...state,page:payload
      }
    }
    default: {
      return state;
    }
  }
};
