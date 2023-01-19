import React, { useEffect, useState } from "react";
import { emailPattern, namePattern } from "../../utils/patterns";
import styles from "./Registration.module.css";

const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGTH = 4;

export function Registration() {
  const [textInputs, setTextInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [textDirty, setTextDirty] = useState({
    name: false,
    email: false,
    password: false,
    passwordCheck: false,
  });

  const [textErrors, setTextErrors] = useState({
    name: "Введите своё имя",
    email: "Почта не может быть пустой",
    password: "Пароль не может быть пустым",
    passwordCheck: "Пароль не может быть пустым",
  });

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      textErrors.name ||
      textErrors.email ||
      textErrors.password ||
      textErrors.passwordCheck
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [
    textErrors.name,
    textErrors.email,
    textErrors.password,
    textErrors.passwordCheck,
  ]);

  const handleNameChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (e.target.value && e.target.value.length <= MIN_NAME_LENGTH) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "Имя должно быть длиннее 2х символом",
      });
    } else if (!namePattern.test(e.target.value)) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "Необходима использовать минимум 1 букву",
      });
    } else if (e.target.value) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "",
      });
    }
  };
  const handlerEmailChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (!emailPattern.test(e.target.value)) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "Некорретный email",
      });
    } else {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "",
      });
    }
  };

  const handlerPasswordChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (e.target.value && e.target.value.length <= MIN_PASSWORD_LENGTH) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "Пароль должен быть длиннее 4х символом",
      });
    } else if (e.target.value) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "",
      });
    }
  };
  const handlePasswordCheck = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (e.target.value != textInputs.password) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "Пароль не совпадает",
      });
    } else if (e.target.value) {
      setTextErrors({
        ...textErrors,
        [e.target.name]: "",
      });
    }
  };

  const handlerBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setTextDirty({ ...textDirty, [e.target.name]: true });
        break;
      case "email":
        setTextDirty({ ...textDirty, [e.target.name]: true });
        break;
      case "password":
        setTextDirty({ ...textDirty, [e.target.name]: true });
        break;
      case "passwordCheck":
        setTextDirty({ ...textDirty, [e.target.name]: true });
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTextInputs({
      ...textInputs,
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h1>Registration</h1>
        {textDirty.name && textErrors.name && (
          <div style={{ color: "red" }}>{textErrors.name}</div>
        )}
        <input
          value={textInputs.name}
          onChange={handleNameChange}
          onBlur={handlerBlur}
          name="name"
          type="text"
          placeholder="Введите ваше имя"
        />
        {textDirty.email && textErrors.email && (
          <div style={{ color: "red" }}>{textErrors.email}</div>
        )}
        <input
          value={textInputs.email}
          onChange={handlerEmailChange}
          onBlur={handlerBlur}
          name="email"
          type="text"
          placeholder="Введите ваш email"
        />
        {textDirty.password && textErrors.password && (
          <div style={{ color: "red" }}>{textErrors.password}</div>
        )}
        <input
          value={textInputs.password}
          onChange={handlerPasswordChange}
          onBlur={handlerBlur}
          name="password"
          type="password"
          placeholder="Введите ваш пароль"
        />
        {textDirty.passwordCheck && textErrors.passwordCheck && (
          <div style={{ color: "red" }}>{textErrors.passwordCheck}</div>
        )}
        <input
          value={textInputs.passwordCheck}
          onChange={handlePasswordCheck}
          onBlur={handlerBlur}
          name="passwordCheck"
          type="password"
          placeholder="Повторите ваш пароль"
        />
        <input type="submit" value="Отправить" disabled={!isValid} />
      </form>
    </div>
  );
}
