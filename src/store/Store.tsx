import { types } from "mobx-state-tree";

const parts = {
  skinTone: ["brown", "light", "dark", "black", "red", "yellow"],
  body: ["chest", "breasts"],
  accessory: ["none", "roundGlasses", "tinyGlasses", "shades"],
  mouth: ["serious", "grin", "openSmile", "lips", "open", "tongue"],
  facialHair: ["none", "stubble", "mediumBeard"],
  clothing: ["shirt", "dressShirt", "vneck", "dress"],
  hat: ["none", "beanie", "turban"],
  hatColor: ["white", "blue", "black", "red", "green"],
  hairColor: ["blonde", "orange", "black", "white", "brown", "blue", "pink"],
  clothingColor: ["white", "blue", "black", "green", "red"],
  eyes: ["normal", "squint", "wink", "leftTwitch", "dizzy", "heart"],
  hair: [
    "none",
    "long",
    "bun",
    "short",
    "pixie",
    "balding",
    "buzz",
    "afro",
    "bob",
  ],
};

const Avatar = types
  .model({
    skinTone: types.string,
    body: types.string,
    hair: types.string,
    hairColor: types.string,
    clothing: types.string,
    clothingColor: types.string,
    hat: types.string,
    hatColor: types.string,
    accessory: types.string,
    eyes: types.string,
    facialHair: types.string,
    mouth: types.string,
    name: types.string,
    circleColor: types.string,
    eyebrows: types.string,
    graphic: types.string,
    faceMask: types.boolean,
    lashes: types.boolean,
    lipColor: types.string,
  })
  .actions((self) => ({
    setProperty(property: any) {
      self[property] =
        parts[property][
          (parts[property].indexOf(self[property]) + 1) % parts[property].length
        ];
    },
    setName(name: string) {
      self.name = name;
    },
  }));

export const avatar = Avatar.create({
  skinTone: "light",
  eyes: "normal",
  mouth: "open",
  facialHair: "none",
  body: "chest",
  accessory: "none",
  hairColor: "black",
  hair: "short",
  clothingColor: "white",
  clothing: "shirt",
  hat: "none",
  hatColor: "white",
  name: "",
  circleColor: "blue",
  eyebrows: "angry",
  graphic: "none",
  faceMask: false,
  lashes: false,
  lipColor: "red",
});

const Toast = types
  .model({
    isVisible: types.boolean,
  })
  .actions((self) => ({
    setVisible(status: boolean) {
      self.isVisible = status;
    },
  }));

export const toast = Toast.create({
  isVisible: false,
});

const Auth = types
  .model({
    isRegistred: types.boolean,
    room: types.optional(types.string, ""),
  })
  .actions((self) => ({
    setRegistred(status: boolean) {
      self.isRegistred = status;
    },
    setRoom(status: string) {
      self.room = status;
    },
  }));

export const auth = Auth.create({
  isRegistred: false,
  room: "",
});
