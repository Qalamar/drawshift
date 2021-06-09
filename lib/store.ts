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

const CANVAS = types
  .model({
    board: types.string,
    title: types.string,
    description: types.string,
    user_id: types.string,
  })
  .actions((self) => ({
    setBoard(status) {
      self.board = status;
    },
    setTitle(status) {
      self.title = status;
    },
    setDescription(status) {
      self.description = status;
    },
    setUserId(status) {
      self.user_id = status;
    },
  }));
export const canvas = CANVAS.create({
  board: JSON.stringify({ lines: [], width: "auto", height: 450 }),
  title: "",
  description: "",
  user_id: "",
});
