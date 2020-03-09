import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../index";
import { cartAdd, cartRedirect, cartOrder } from "../store/actions";
import { useCallback } from "react";
import { CartItems } from "../store/reducers/reducerTypes";

const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const order = useSelector((state: RootState) => state.cart.order);
  const cartSuccess = useSelector((state: RootState) => state.cart.success);

  const dispatch = useDispatch();
  const onAddCart = (item: CartItems) => dispatch(cartAdd(item));
  const onCartRedirect = useCallback(() => dispatch(cartRedirect()), [
    dispatch
  ]);
  const onCartOrder = useCallback(() => dispatch(cartOrder()), [dispatch]);

  return {
    cartItems,
    order,
    cartSuccess,
    onAddCart,
    onCartRedirect,
    onCartOrder
  };
};

export default useCart;
