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

const STORE = types
  .model({
    board: types.string,
  })
  .actions((self) => ({
    setBoard(status) {
      self.board = status;
    },
  }));

export const store = STORE.create({
  board: JSON.stringify({ "lines": [{ "points": [], "brushColor": "#0e0e0e0", "brushRadius": 5 }], "width": "auto", "height": 450 }),
});
