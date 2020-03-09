import React from "react";
import Header from "../Components/Header";
import Footer from "./Footer";
const classes = require("../Style.module.css");

interface LayoutCProps {
  children: React.ReactNode;
}

const LayoutC = ({ children }: LayoutCProps) => (
  <div className={classes.LayoutCBack}>
    <Header />
    {children}
    <Footer />
  </div>
);

export default LayoutC;
