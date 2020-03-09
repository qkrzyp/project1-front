import React from "react";
const classes = require("../Style.module.css");

export const changeClass = (key: string, error: Array<string>) => {
  let inputClasses = [classes.FormInput];
  if (error.length >= 1) {
    const errorKey = error.map(e => e === key);
    for (let e of errorKey) {
      if (e === true) {
        inputClasses = [classes.FormInput, classes.FormInputDanger];
      }
    }
  }
  return inputClasses.join(" ");
};

export const errorMessage = (error: string | null) => (
  <div
    className={classes.ErrorMessage}
    style={{
      opacity: error ? "1" : "0",
      textAlign: "center"
    }}
  >
    {error}
  </div>
);

export const infoChangeClass = (key: string, error: string[]) => {
  let inputClasses = [classes.InfoInput];
  if (error.length >= 1) {
    const errorKey = error.map(e => e === key);
    for (let e of errorKey) {
      if (e === true) {
        inputClasses = [classes.InfoInput, classes.InfoInputDanger];
      }
    }
  }
  return inputClasses.join(" ");
};

export const infoTextareaChangeClass = (key: string, error: string[]) => {
  let inputClasses = [classes.InfoTextarea];
  if (error.length >= 1) {
    const errorKey = error.map(e => e === key);
    for (let e of errorKey) {
      if (e === true) {
        inputClasses = [classes.InfoTextarea, classes.InfoInputDanger];
      }
    }
  }
  return inputClasses.join(" ");
};
