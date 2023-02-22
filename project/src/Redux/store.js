import { legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {ProductReducer} from "./Products/products.reducer";

const rootReducer=combineReducers({ProductReducer})


export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))