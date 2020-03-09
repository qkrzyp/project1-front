import * as actionTypes from "./actionTypes";
import { CartItems } from "../reducers/reducerTypes";

export const cartAdd = (cartItem: CartItems) => {
  return {
    type: actionTypes.CART_ADD,
    cartItem
  };
};

export const cartRedirect = () => {
  return {
    type: actionTypes.CART_REDIRECT
  };
};

export const cartOrder = () => {
  return {
    type: actionTypes.CART_ORDER
  };
};
