import {
  legacy_createStore as createStore, // to avoid error
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userLoginFromStorage = localStorage.getItem("userInfo");
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
if (userLoginFromStorage && userLoginFromStorage !== "undefined") {
  JSON.parse(localStorage.getItem("userInfo"));
}
// ? JSON.parse(localStorage.getItem("userInfo"))

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userLoginFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
