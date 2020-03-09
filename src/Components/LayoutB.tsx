import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const classes = require("../Style.module.css");

interface LayoutBProps {
  title: string;
  children: React.ReactNode;
}

const LayoutB = ({ title, children }: LayoutBProps) => (
  <>
    <Header />
    <div className={classes.LayoutBBack}>
      <h3 className={classes.LayoutBTitle}>{title}</h3>
    </div>
    <div className={classes.LayoutB}>{children}</div>
    <Footer />
  </>
);

export default LayoutB;
