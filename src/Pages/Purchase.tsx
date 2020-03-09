import React, { useState, useEffect } from "react";
import { userOrder } from "../api";
import LayoutC from "../Components/LayoutC";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface MyOrders {
  createdAt: string;
  products: {
    productName: string;
    productPrice: number;
    productQuantity: number;
  }[];
  totalPrice: number;
  payment: string;
}

const Purchase = () => {
  const [myOrders, setMyOrders] = useState<MyOrders[]>([]);
  const { authToken } = useAuth();

  useEffect(() => {
    userOrder(authToken).then(result => {
      if (!result.error) {
        setMyOrders(result);
      }
    });
  }, [authToken]);

  return (
    <LayoutC>
      <div className={classes.AllTable}>
        <h3>내 주문내역</h3>
        {myOrders.length < 1 ? (
          <p className={classes.NoPurchase}>주문내역이 없습니다.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>주문일</th>
                <th>상품정보</th>
                <th>총액</th>
                <th>결제수단</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((o, i) => (
                <tr key={i}>
                  <td>{o.createdAt}</td>
                  <td>
                    {o.products.map((p, i) => (
                      <table key={i} className={classes.PurchaseProduct}>
                        <tbody>
                          <tr>
                            <td>
                              {p.productName} ( {p.productPrice} x{" "}
                              {p.productQuantity}개 )
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                  </td>
                  <td>{o.totalPrice}</td>
                  <td>{o.payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </LayoutC>
  );
};

export default Purchase;
