import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";
const classes = require("../Style.module.css");

interface LayoutAProps {
  children: React.ReactNode;
}

const LayoutA = ({ children }: LayoutAProps) => (
  <div className={classes.LayoutABack}>
    <Header />
    <Banner />
    <div className={classes.LayoutA}>{children}</div>
    <Footer />
  </div>
);

export default LayoutA;
