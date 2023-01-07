import React from "react";
import styles from "./email.module.css";

export const Email = (props) => {
  return (
    <div className={styles.post}>
      <br/>
      <h3>Id: {props.id}</h3>
      <p>User: {props.user}</p>
      <p>Email: {props.email}</p>
      <p>Password: {props.password}</p>
    </div>
  );
};
