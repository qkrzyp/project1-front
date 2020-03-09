import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutC from "../Components/LayoutC";
import { order } from "../api";
import {
  infoChangeClass,
  infoTextareaChangeClass,
  errorMessage
} from "../Components/Error";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useCart from "../Hooks/useCart";
const classes = require("../Style.module.css");

interface OrderProps extends RouteComponentProps<any> {}

interface OrderValues {
  name: string;
  address: string;
  email: string;
  phone: string;
  payment: string;
  error: string | null;
  param: string[];
  success: boolean;
}

const Order = ({ history }: OrderProps) => {
  const [values, setValues] = useState<OrderValues>({
    name: "",
    address: "",
    email: "",
    phone: "",
    payment: "",
    error: null,
    param: [],
    success: false
  });
  const { authToken } = useAuth();
  const { cartItems, onCartOrder } = useCart();
  const totalPrice = cartItems
    .map(c => c.price * c.quantity)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    onCartOrder();
    if (cartItems.length < 1) {
      history.push("/");
    }
  }, [cartItems, onCartOrder, history]);

  const inputChangeHandler = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const products = cartItems.map(p => ({
      productName: p.name,
      productPrice: p.price,
      productQuantity: p.quantity
    }));
    const orderData = {
      ...values,
      totalPrice,
      products
    };
    order(authToken, orderData).then(result => {
      if (result.error) {
        const param = result.error.map((e: { param: string }) => e.param);
        setValues({ ...values, error: result.error[0].msg, param });
      } else {
        setValues({ ...values, success: true });
      }
    });
  };

  return (
    <LayoutC>
      {values.success && <Redirect to="/order-success" />}
      <div className={classes.Order}>
        <h3>주문상품 정보</h3>
        <ul className={classes.OrderDetail}>
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
          총 금액 : <strong>{totalPrice}</strong> 원
        </p>
        <h4>주문결제</h4>
        {errorMessage(values.error)}
        <form className={classes.InfoForm} onSubmit={formSubmit}>
          <div>
            <label>주문자 이름</label>
            <input
              type="text"
              className={infoChangeClass("name", values.param)}
              onChange={event => inputChangeHandler(event, "name")}
            />
          </div>
          <div>
            <label>주소</label>
            <textarea
              className={infoTextareaChangeClass("address", values.param)}
              onChange={event => inputChangeHandler(event, "address")}
            />
          </div>
          <div>
            <label>이메일</label>
            <input
              type="text"
              className={infoChangeClass("email", values.param)}
              onChange={event => inputChangeHandler(event, "email")}
            />
          </div>
          <div>
            <label>휴대전화</label>
            <input
              type="number"
              className={infoChangeClass("phone", values.param)}
              onChange={event => inputChangeHandler(event, "phone")}
            />
          </div>
          <div>
            <label>결제수단</label>
            <select
              className={infoChangeClass("payment", values.param)}
              onChange={event => inputChangeHandler(event, "payment")}
            >
              <option value="">결제수단을 선택해주세요.</option>
              <option value="신용카드">신용카드</option>
              <option value="무통장 입금">무통장 입금</option>
            </select>
          </div>
          <button className={classes.InfoFormBtn}>결제하기</button>
        </form>
      </div>
    </LayoutC>
  );
};

export default Order;
