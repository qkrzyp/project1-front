import React from "react";
const classes = require("../Style.module.css");

interface RadioProps {
  filter: string;
  filteringHandler: (s: string) => void;
  name: string;
}

const Radio = ({ filter, filteringHandler, name }: RadioProps) => {
  const RadioHandler = () => {
    let sort;
    if (filter === "latest") {
      sort = "createdAt";
    } else if (filter === "lowPrice") {
      sort = "price";
    } else if (filter === "highPrice") {
      sort = "-price";
    } else if (filter === "bestSell") {
      sort = "-sell";
    }
    filteringHandler(sort as string);
  };

  return (
    <span className={classes.Radio}>
      <input type="radio" onChange={RadioHandler} name="select" id={filter} />
      <label htmlFor={filter}>{name}</label>
    </span>
  );
};

export default Radio;
