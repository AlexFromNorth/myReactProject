import React, { useEffect, useState } from "react";
import styles from "./Registration.module.css";

export function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFromValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFromValid(false);
    } else {
      setFromValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const validated = /.+\@.+\..+/;
    if (!validated.test(e.target.value)) {
      setEmailError("Некорретный емайл");
    } else {
      setEmailError("");
    }
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value && e.target.value.length < 4) {
      setPasswordError("Пароль должен быть длиннее 4 символом");
    } else if (e.target.value) {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <h1>Registration</h1>
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
        <input type="submit" value="Send" disabled={!formValid} />
      </form>
    </div>
  );
}
