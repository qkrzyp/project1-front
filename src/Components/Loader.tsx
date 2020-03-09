import React from "react";
const classes = require("../Style.module.css");

const Loader = ({ className }: { className: string }) => (
  <div className={className}>
    <div className={classes.Loader}>
      <p>Loading</p>
    </div>
  </div>
);

export default Loader;
