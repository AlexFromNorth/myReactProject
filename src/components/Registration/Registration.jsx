import React from "react";
import {
  sendEmailCreator,
  updateNewEmailBodyCreator,
} from "../redux/registration-reducer";
import { Email } from "./emails/email";
import styles from "./Registration.module.css";

export const Registration = (props) => {
  // debugger

  const newUsersNameElement = React.createRef();
  const newEmailElement = React.createRef();
  const newPasswordElement = React.createRef();
  // const newRepeatPasswordElement = React.createRef();

  const addPost = () => {
    props.dispatch(sendEmailCreator());
  };

  const emailElements = props.usersEmails.map((post) => (
    <Email
      id={post.id}
      email={post.email}
      password={post.password}
      user={post.user}
    />
  ));

  const onPostChange = () => {
    const user = newUsersNameElement.current.value;
    const email = newEmailElement.current.value;
    const password = newPasswordElement.current.value;

    let action = updateNewEmailBodyCreator(user, email, password);
    // let action = updateNewEmailBodyCreator( email);
    // console.log(action);
    props.dispatch(action);
  };

  return (
    <div className={styles.registration}>
      <input
        type="text"
        placeholder="Name"
        ref={newUsersNameElement}
        value={props.state.newUser}
        onChange={onPostChange}
      />
      <br />
      <input
        type="text"
        placeholder="e-mail"
        ref={newEmailElement}
        value={props.state.newEmail}
        onChange={onPostChange}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        ref={newPasswordElement}
        value={props.state.newPassword}
        onChange={onPostChange}
      />
      <br />
      {/* <input type="text" placeholder="repeat password" ref={newRepeatPasswordElement} value={newRepeatPasswordElement}/>
      <br />  */}
      <button onClick={addPost}>Send</button>

      <div className={styles.posts}>{emailElements}</div>
    </div>
  );
};
