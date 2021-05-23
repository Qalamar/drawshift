import { types } from "mobx-state-tree";

const UI = types
  .model({
    createForm: types.boolean,
    month: types.optional(types.string, ""),
    year: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setNewBoard(status) {
      self.createForm = status;
    },

    setMonth(status) {
      self.month = status;
    },
    setYear(status) {
      self.year = status;
    },
  }));

export const ui = UI.create({
  createForm: false,
  month: "Month",
  year: "Year",
});
