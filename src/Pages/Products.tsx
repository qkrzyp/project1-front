import React, { useState, useEffect } from "react";
import LayoutC from "../Components/LayoutC";
import { getAllCategories, filteredProducts } from "../api";
import Checkbox from "../Components/Checkbox";
import Radio from "../Components/Radio";
import Items from "../Components/Items";
const classes = require("../Style.module.css");

interface Category {
  _id: string;
  name: string;
}

interface Filter {
  filtering: {
    category: string[];
    sort: null | string;
  };
}

const Products = () => {
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState<Filter>({
    filtering: { category: [], sort: null }
  });
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    getAllCategories().then(result => {
      if (result.error) {
        setError(result.error);
      } else {
        setCategories(result);
      }
    });

    filteredResultHandler("createdAt", filter.filtering.category);
  }, [filter.filtering.category]);

  const filteredResultHandler = (sort: string, category: string[]) => {
    filteredProducts(sort, { category }).then(result => {
      if (result.error) {
        setError(result.error);
      } else {
        setFilteredResults(result);
      }
    });
  };

  const filterHandler = (f: any, key: string) => {
    let updateFilter = { ...filter };
    if (key !== "category") {
      updateFilter.filtering.sort = f;
    } else {
      updateFilter.filtering.category = f;
    }
    setFilter(updateFilter);
    filteredResultHandler(
      filter.filtering.sort as string,
      filter.filtering.category
    );
  };

  return (
    <LayoutC>
      <div className={classes.Products}>
        <h3>전체상품</h3>
        <ul className={classes.ProductsCategories}>
          <li>
            <span>카테고리 > </span>
            <Checkbox
              categories={categories}
              filteringHandler={f => filterHandler(f, "category")}
            />
          </li>
          <li>
            <Radio
              filteringHandler={f => filterHandler(f, "latest")}
              filter="latest"
              name="최신순"
            />
            <Radio
              filteringHandler={f => filterHandler(f, "lowPrice")}
              name="낮은 가격순"
              filter="lowPrice"
            />
            <Radio
              filteringHandler={f => filterHandler(f, "highPrice")}
              name="높은 가격순"
              filter="highPrice"
            />
            <Radio
              filteringHandler={f => filterHandler(f, "bestSell")}
              name="많이 팔린순"
              filter="bestSell"
            />
          </li>
        </ul>
        <div className={classes.ProductsItems}>
          <Items products={filteredResults} />
        </div>
      </div>
    </LayoutC>
  );
};

export default Products;
