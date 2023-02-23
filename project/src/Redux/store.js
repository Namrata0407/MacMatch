import { legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {ProductReducer} from "./Products/products.reducer";
import {reducer} from "./cart/cart.reducer"
const rootReducer=combineReducers({ProductReducer,reducer})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))