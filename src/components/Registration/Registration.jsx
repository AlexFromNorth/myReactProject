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

  const [textError, setTextError] = useState({
    name: "Введите своё имя",
    email: "Почта не может быть пустой",
    password: "Пароль не может быть пустым",
    passwordCheck: "Пароль не может быть пустым",
  });

  const [formValid, setFromValid] = useState(false);

  useEffect(() => {
    if (
      textError.name ||
      textError.email ||
      textError.password ||
      textError.passwordCheck
    ) {
      setFromValid(false);
    } else {
      setFromValid(true);
    }
  }, [
    textError.name,
    textError.email,
    textError.password,
    textError.passwordCheck,
  ]);

  //
  const handleNameChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    const validated = namePattern;
    if (e.target.value && e.target.value.length <= MIN_NAME_LENGTH) {
      setTextError({
        ...textError,
        [e.target.name]: "Имя должно быть длиннее 2х символом",
      });
    } else if (!validated.test(e.target.value)) {
      setTextError({
        ...textError,
        [e.target.name]: "Необходима использовать минимум 1 букву",
      });
    } else if (e.target.value) {
      setTextError({
        ...textError,
        [e.target.name]: "",
      });
    }
  };
  const handlerEmailChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    const validated = emailPattern;
    if (!validated.test(e.target.value)) {
      setTextError({
        ...textError,
        [e.target.name]: "Некорретный емайл",
      });
    } else {
      setTextError({
        ...textError,
        [e.target.name]: "",
      });
    }
  };

  const handlerPasswordChange = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (e.target.value && e.target.value.length <= MIN_PASSWORD_LENGTH) {
      setTextError({
        ...textError,
        [e.target.name]: "Пароль должен быть длиннее 4х символом",
      });
    } else if (e.target.value) {
      setTextError({
        ...textError,
        [e.target.name]: "",
      });
    }
  };
  const passwordСheckHandler = (e) => {
    setTextInputs({ ...textInputs, [e.target.name]: e.target.value });
    if (e.target.value != textInputs.password) {
      setTextError({
        ...textError,
        [e.target.name]: "Пароль не совпадает",
      });
    } else if (e.target.value) {
      setTextError({
        ...textError,
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

  const onFormSubmit = (e) => {
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
      <form onSubmit={onFormSubmit}>
        <h1>Registration</h1>
        {textDirty.name && textError.name && (
          <div style={{ color: "red" }}>{textError.name}</div>
        )}
        <input
          value={textInputs.name}
          onChange={handleNameChange}
          onBlur={handlerBlur}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        {textDirty.email && textError.email && (
          <div style={{ color: "red" }}>{textError.email}</div>
        )}
        <input
          value={textInputs.email}
          onChange={handlerEmailChange}
          onBlur={handlerBlur}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        {textDirty.password && textError.password && (
          <div style={{ color: "red" }}>{textError.password}</div>
        )}
        <input
          value={textInputs.password}
          onChange={handlerPasswordChange}
          onBlur={handlerBlur}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {textDirty.passwordCheck && textError.passwordCheck && (
          <div style={{ color: "red" }}>{textError.passwordCheck}</div>
        )}
        <input
          value={textInputs.passwordCheck}
          onChange={passwordСheckHandler}
          onBlur={handlerBlur}
          name="passwordCheck"
          type="password"
          placeholder="Repeat your password"
        />
        <input type="submit" value="Send" disabled={!formValid} />
      </form>
    </div>
  );
}
