import registrationReducer from "./registration-reducer";

export let store = {
  _state: {
    usersEmails: [
      { id: "1", user: "Alex", email: "Alex@hub.com", password: "123123" },
      { id: "2", user: "Alex", email: "Alex@hub.qwerty", password: "123123" },
      { id: "3", user: "Alex", email: "Alex@hub.lol", password: "123123" },
      { id: "4", user: "Alex", email: "Alex@hub.gb", password: "123123" },
      { id: "5", user: "Alex", email: "Alex@hub.pro", password: "123123" },
      { id: "6", user: "Alex", email: "Alex@hub.wk", password: "123123" },
      { id: "7", user: "Alex", email: "Alex@hub.dote", password: "123123" },
      { id: "8", user: "Alex", email: "Alex@hub.tg", password: "123123" },
      { id: "9", user: "Alex", email: "Alex@hub.ru", password: "123123" },
    ],

    newEmail: "",
    newUser: "",
    newPassword: "",
    // newPassword: "",

    // searchEmail: "",
    // searchPassword: "",
  },

  _callSubscriber() {
    console.log("state is change");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    // console.log(this._state);

    this._state = registrationReducer(this._state, action);

    // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    // console.log(this._state.usersEmails);
    console.log(this._state);
    // debugger
  },
};
