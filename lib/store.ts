import { types } from "mobx-state-tree";

const UI = types
  .model({
    createForm: types.boolean,
    loginForm: types.boolean,
  })
  .actions((self) => ({
    setNewBoard(status) {
      self.createForm = status;
    },
    setLoginForm(status) {
      self.loginForm = status;
    },
  }));

export const ui = UI.create({
  createForm: false,
  loginForm: false,
});
