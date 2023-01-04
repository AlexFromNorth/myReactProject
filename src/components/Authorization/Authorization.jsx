import React from "react";
import s from "./Authorization.module.css";

export const Authorization = (props) => {
  return (
    <div className={s.authorization}>
      <input type="text" placeholder="Your login" />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <button>Send</button>
    </div>
  );
};
