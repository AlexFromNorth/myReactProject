import React from "react";
import s from "./Profile.module.css";

export const Profile = (props) => {
  return (
    <div className={s.profile}>
      <h2>{props.name}</h2>
    </div>
  );
};
