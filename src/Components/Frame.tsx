import React from "react";
import { Redirect, Link } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { CartItems } from "../store/reducers/reducerTypes";
const classes = require("../Style.module.css");

interface FrameProps {
  id: string;
  name: string;
  price: number;
  item: CartItems;
}

const Frame = ({ item, id, name, price }: FrameProps) => {
  const CartHandler = (cartItem: CartItems) => {
    onAddCart(cartItem);
  };

  const { onAddCart, cartSuccess } = useCart();

  return (
    <div className={classes.Frame}>
      {cartSuccess && <Redirect to="/cart" />}
      <Link to={`/product/${id}`}>
        <ul>
          <li className={classes.FrameImage}>
            <img
              src={`${process.env.REACT_APP_URL}/product/photo/${id}`}
              alt={name}
            />
          </li>
          <li>{name}</li>
          <li>￦{price}</li>
        </ul>
      </Link>
      <button className={classes.FrameBtn} onClick={() => CartHandler(item)}>
        장바구니에 담기
      </button>
    </div>
  );
};

export default Frame;
