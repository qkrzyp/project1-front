import React, { useEffect, useState } from "react";
import LayoutC from "../Components/LayoutC";
import { getAllProducts, deleteProduct } from "../api";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
const classes = require("../Style.module.css");

interface Products {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  sell: number;
  delivery: string;
  createdAt: string;
}

const AllProducts = () => {
  const { authToken } = useAuth();
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts(authToken).then(result => {
      setLoading(false);
      if (result) {
        setProducts(result);
      }
    });
  }, [authToken]);

  const deleteProductHandler = (id: string) => {
    let allProducts = [...products];
    deleteProduct(authToken, id).then(result => {
      if (result._id) {
        allProducts = allProducts.filter(p => p._id !== result._id);
        setProducts(allProducts);
      }
    });
  };

  return (
    <LayoutC>
      <div className={classes.AllTable}>
        <h3>전체 상품 관리</h3>
        {loading ? (
          <Loader className="" />
        ) : (
          <table>
            <thead>
              <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>상품 개수</th>
                <th>팔린 개수</th>
                <th>배송비</th>
                <th>생성일</th>
                <th>수정 / 삭제</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={i}>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.quantity}</td>
                  <td>{p.sell}</td>
                  <td>{p.delivery}</td>
                  <td>{p.createdAt.split("T")[0]}</td>
                  <td>
                    <Link to={`/admin/edit-product/${p._id}`}>
                      <button className={classes.EditBtn}>수정</button>
                    </Link>
                    <button
                      className={classes.EditBtn}
                      onClick={() => deleteProductHandler(p._id)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </LayoutC>
  );
};

export default AllProducts;
