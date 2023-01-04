import React from "react";
import s from "./Registration.module.css";

export const Registration = (props) => {
  return (
    <div className={s.registration}>
      <input type="text" placeholder="Name" />
      <br />
      <input type="text" placeholder="e-mail" />
      <br />
      <input type="text" placeholder="password" />
      <br />
      <input type="text" placeholder="repeat password" />
      <br />
      <button>Send</button>
    </div>
  );
};
