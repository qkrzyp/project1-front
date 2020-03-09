import React, { useEffect, useState } from "react";
import LayoutC from "../Components/LayoutC";
import { getAllOrders } from "../api";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface Order {
  name: string;
  address: string;
  phone: number;
  email: string;
  payment: string;
  totalPrice: number;
  createdAt: string;
}

const AllOrders = () => {
  const { authToken } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    getAllOrders(authToken).then(result => {
      if (result) {
        setOrders(result);
      }
    });
  }, [authToken]);

  return (
    <LayoutC>
      <div className={classes.AllTable}>
        <h3>전체 주문 관리</h3>
        <table>
          <thead>
            <tr>
              <th>주문자 이름</th>
              <th>주소</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>결제수단</th>
              <th>총액</th>
              <th>주문일</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td>{o.name}</td>
                <td>{o.address}</td>
                <td>0{o.phone}</td>
                <td>{o.email}</td>
                <td>{o.payment}</td>
                <td>{o.totalPrice}</td>
                <td>{o.createdAt.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </LayoutC>
  );
};

export default AllOrders;
