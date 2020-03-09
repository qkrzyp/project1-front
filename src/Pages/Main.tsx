import React, { useEffect, useState } from "react";
import LayoutA from "../Components/LayoutA";
import Search from "../Components/Search";
import { getProducts } from "../api";
import Items from "../Components/Items";
const classes = require("../Style.module.css");

const Main = () => {
  const [latest, setLatest] = useState([]);
  const [best, setBest] = useState([]);
  const [cheap, setCheap] = useState([]);

  useEffect(() => {
    getProducts("createdAt").then(result => {
      if (result) {
        setLatest(result);
      }
    });
  }, []);

  useEffect(() => {
    getProducts("-sell").then(result => {
      if (result) {
        setBest(result);
      }
    });
  }, []);

  useEffect(() => {
    getProducts("price").then(result => {
      if (result) {
        setCheap(result);
      }
    });
  }, []);

  return (
    <LayoutA>
      <Search />
      <div className={classes.Main}>
        <h3>New Arrival</h3>
        <Items products={latest} />
        <h3>Best Seller</h3>
        <Items products={best} />
        <h3>Cheap</h3>
        <Items products={cheap} />
      </div>
    </LayoutA>
  );
};

export default Main;
