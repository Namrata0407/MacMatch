import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ProductReducer } from "./Products/products.reducer";
import { reducer as cartReducer } from "./cart/cart.reducer";
import { reducer as adminReducer } from "./AdminRedux/admin.reducer";
const rootReducer = combineReducers({
  ProductReducer,
  cartReducer,
  adminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
