import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import LayoutC from "../Components/LayoutC";
import { getProduct, getOtherProduct } from "../api";
import Items from "../Components/Items";
import useCart from "../Hooks/useCart";
const classes = require("../Style.module.css");

interface DetailProps extends RouteComponentProps<any> {}

interface Products {
  _id: string;
  name: string;
  quantity: number;
  sell: number;
  description: string;
  delivery: string;
  price: number;
  category: {
    _id: string;
    name: string;
  };
}

const Detail = ({ match, history }: DetailProps) => {
  const [products, setProducts] = useState<Products>({
    _id: "",
    name: "",
    quantity: 0,
    sell: 0,
    description: "",
    delivery: "",
    price: 0,
    category: {
      _id: "",
      name: ""
    }
  });
  const [recommend, setRecommend] = useState([]);
  const [error, setError] = useState(false);
  const productId = match.params.productId;
  const { onAddCart } = useCart();

  useEffect(() => {
    getProduct(productId).then(result => {
      if (result.error) {
        setError(true);
      } else {
        setProducts(result);
      }
    });

    getOtherProduct(productId).then(result => {
      if (result.error) {
        setError(true);
      } else {
        setRecommend(result);
      }
    });
  }, [productId]);

  const noProduct = () => {
    if (error) {
      return <p className={classes.NoProduct}>상품을 불러올수 없습니다.</p>;
    }
  };

  const detailCartHandler = () => {
    onAddCart(products);
  };

  const detailOrderHandler = () => {
    onAddCart(products);
    history.push("/order");
  };

  return (
    <LayoutC>
      <div className={classes.DetailBack}>
        {noProduct()}
        {!error && (
          <>
            <div className={classes.Detail}>
              <div className={classes.DetailImage}>
                <img
                  src={`${process.env.REACT_APP_URL}/product/photo/${productId}`}
                  alt={products.name}
                />
              </div>
              <ul className={classes.DetailText}>
                <li className={classes.DetailCategory}>
                  {products.category && products.category.name}
                </li>
                <li className={classes.DetailName}>{products.name}</li>
                <li className={classes.DetailDesc}>{products.description}</li>
                <li className={classes.DetailPrice}>￦{products.price}원</li>
                <li>
                  <button
                    className={classes.DetailBtn}
                    onClick={detailCartHandler}
                  >
                    장바구니에 추가
                  </button>
                </li>
                <li>
                  <button
                    className={classes.DetailBtn}
                    onClick={detailOrderHandler}
                  >
                    바로 주문하기
                  </button>
                </li>
              </ul>
            </div>
            <div className={classes.DetailOther}>
              <h3>추천 상품</h3>
              <Items products={recommend} />
            </div>
          </>
        )}
      </div>
    </LayoutC>
  );
};

export default Detail;
