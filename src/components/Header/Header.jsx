import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.item}>
        <NavLink to="/authorization">Authorization</NavLink>
        {/* navlink не перезагружает страницу в отличии от а и добавляет класс активе при клике */}
      </div>
      <div className={s.item}>
        <NavLink to="/registration">Registration</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
};
