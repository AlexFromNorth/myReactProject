const NEW_USER_EMAIL = "NEW_USER_EMAIL";
const SEND_MESSAGE = "SEND_MESSAGE";

export const registrationReducer = (state, action) => {
  switch (action.type) {
    case NEW_USER_EMAIL:
      //   debugger;
      state.newUser = action.user;
      state.newEmail = action.email;
      state.newPassword = action.password;
      return state;
    case SEND_MESSAGE:
      let email = state.newEmail;
      let user = state.newUser;
      let password = state.newPassword;

      state.newUser = "";
      state.newEmail = "";
      state.newPassword = "";

      state.usersEmails.push({
        id: +state.usersEmails[state.usersEmails.length - 1].id + 1,
        email: email,
        user: user,
        password: password,
      });
      return state;
    default:
      return state;
  }
};

export const sendEmailCreator = () => ({ type: SEND_MESSAGE });
export const updateNewEmailBodyCreator = (user, email, password) => ({
  // export const updateNewEmailBodyCreator = (email) => ({
  type: NEW_USER_EMAIL,
  user: user,
  email: email,
  password: password,
});

export default registrationReducer;
