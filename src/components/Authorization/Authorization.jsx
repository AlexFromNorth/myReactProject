import React from "react";
import style from "./Authorization.module.css";

export const Authorization = (props) => {
  // !Логин:(поля)
  // -логин(почта)
  // -пароль
  // -отправить
  // и еще каким-то макаром пилить туда валидацию(регулярные выжения использовать?)

  return (
    <form className={style.authorization }>
      <input name="login" type="text" placeholder="Your login(email)" />
      <br />
      <input name="password" type="text" placeholder="Password" />
      <br />
      <input type="submit" />
    </form>
  );
};
