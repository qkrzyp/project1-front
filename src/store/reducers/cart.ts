import * as actionTypes from "../actions/actionTypes";
import { CartState, CartAction } from "./reducerTypes";

const initialState: CartState = {
  cartItems: [],
  success: false,
  order: false
};

const reducer = (
  state: CartState = initialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case actionTypes.CART_ADD:
      let updatedCart = {
        ...action.cartItem,
        quantity: 1
      };
      const carts = [...state.cartItems];
      const cartIndex = carts.findIndex(c => c._id === action.cartItem._id);
      if (cartIndex === -1) {
        carts.push(updatedCart);
      } else {
        carts[cartIndex].quantity = carts[cartIndex].quantity + 1;
      }
      return {
        cartItems: carts,
        success: true,
        order: true
      };
    case actionTypes.CART_REDIRECT:
      return { ...state, success: false, order: true };
    case actionTypes.CART_ORDER:
      return { ...state, order: false };
    default:
      return state;
  }
};

export default reducer;
