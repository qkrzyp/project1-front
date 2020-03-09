import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutC from "../Components/LayoutC";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
const classes = require("../Style.module.css");

interface CartProps extends RouteComponentProps<any> {}

const Cart = ({ history }: CartProps) => {
  const { authToken, onAuthRedirect } = useAuth();
  const { cartItems, onCartRedirect } = useCart();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (cartItems.length < 1) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    onCartRedirect();
  }, [onCartRedirect, cartItems]);

  const noCart = () => {
    if (cartItems.length < 1) {
      return <li className={classes.NoCart}> 장바구니에 상품이 없습니다. </li>;
    }
  };

  const OrderHandler = () => {
    if (authToken) {
      history.push("/order");
    } else {
      onAuthRedirect("/order");
      history.push("/order");
    }
  };

  return (
    <LayoutC>
      <div className={classes.Cart}>
        <h3>장바구니</h3>
        <ul>
          {noCart()}
          {cartItems.map((c, i) => (
            <li key={i}>
              <span className={classes.CartImage}>
                <img
                  src={`${process.env.REACT_APP_URL}/product/photo/${c._id}`}
                  alt={c.name}
                />
              </span>
              상품명 : {c.name} / 상품가격 : {c.price} / 상품개수: {c.quantity}{" "}
              / 배송비 : {c.delivery}
            </li>
          ))}
        </ul>

        <p className={classes.TotalPrice}>
          총 금액 :{" "}
          <strong>
            {cartItems
              .map(c => c.price * c.quantity)
              .reduce((a, b) => a + b, 0)}
          </strong>{" "}
          원
        </p>

        <button
          className={classes.FormBtn}
          disabled={disabled}
          onClick={OrderHandler}
        >
          주문하기
        </button>
      </div>
    </LayoutC>
  );
};

export default Cart;
