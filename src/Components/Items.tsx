import React from "react";
import Frame from "../Components/Frame";
import { CartItems } from "../store/reducers/reducerTypes";
const classes = require("../Style.module.css");

interface ItemsProps {
  products: CartItems[];
}

const Items = ({ products }: ItemsProps) => {
  return (
    <div className={classes.Items}>
      {products.map((p, i) => (
        <Frame key={i} id={p._id} name={p.name} price={p.price} item={p} />
      ))}
    </div>
  );
};

export default Items;
