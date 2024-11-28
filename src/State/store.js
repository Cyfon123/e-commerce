import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import adminOrderReducer from "./Admin/Order/Reducer";
import { addressReducer } from "./Adrress/Reducer";

const rootReducers = combineReducers({
    auth : authReducer,
    productStore : customerProductReducer,
    cart : cartReducer,
    orderStore : orderReducer,
    adminOrder : adminOrderReducer,
    addressProperty : addressReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))
