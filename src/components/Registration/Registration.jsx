import React, { useEffect, useState } from "react";
import { emailPattern } from "../../utils/patterns";
import styles from "./Registration.module.css";

export function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordCheckDirty, setPasswordCheckDirty] = useState(false);
  const [nameError, setNameError] = useState("Введите своё имя");
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [passwordCheckError, setPasswordCheckError] = useState(
    "Пароль не может быть пустым"
  );
  
  const [formValid, setFromValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || passwordError || passwordCheckError) {
      setFromValid(false);
    } else {
      setFromValid(true);
    }
  }, [nameError, emailError, passwordError, passwordCheckError]);


  const MIN_NAME_LENGTH = 2
  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value && e.target.value.length <= MIN_NAME_LENGTH) {
      setNameError("Имя должно быть длиннее 2х символом");
    } else if (e.target.value) {
      setNameError("");
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    const validated = emailPattern;
    if (!validated.test(e.target.value)) {
      setEmailError("Некорретный емайл");
    } else {
      setEmailError("");
    }
  };

  const MIN_PASSWORD_LENGTH = 4
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value && e.target.value.length <= MIN_PASSWORD_LENGTH) {
      setPasswordError("Пароль должен быть длиннее 4х символом");
    } else if (e.target.value) {
      setPasswordError("");
    }
  };
  const passwordСheckHandler = (e) => {
    setPasswordCheck(e.target.value);
    if (e.target.value != password) {
      setPasswordCheckError("Пароль не совпадает");
    } else if (e.target.value) {
      setPasswordCheckError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "passwordCheck":
        setPasswordCheckDirty(true);
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <h1>Registration</h1>
        {nameDirty && nameError && (
          <div style={{ color: "red" }}>{nameError}</div>
        )}
        <input
          value={name}
          onChange={(e) => nameHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="name"
          type="text"
          placeholder="Enter your name"
        />
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        {passwordDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        {passwordCheckDirty && passwordCheckError && (
          <div style={{ color: "red" }}>{passwordCheckError}</div>
        )}
        <input
          value={passwordCheck}
          onChange={(e) => passwordСheckHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="passwordCheck"
          type="password"
          placeholder="Repeat your password"
        />
        <input type="submit" value="Send" disabled={!formValid} />
      </form>
    </div>
  );
}
