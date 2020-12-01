import { types } from "mobx-state-tree";

// Avatar possible props
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

// Grouping properties
export const Basic = [
  {
    text: "Skin",
    property: "skinTone",
  },
  {
    text: "Body",
    property: "body",
  },
  {
    text: "Mouth",
    property: "mouth",
  },
  {
    text: "Eyes",
    property: "eyes",
  },
  {
    text: "Facial Hair",
    property: "facialHair",
  },
  {
    text: "Glasses",
    property: "accessory",
  },
];

export const Colored = [
  {
    text: "Hair",
    property: "hair",
  },
  {
    text: "Clothes",
    property: "clothing",
  },
  {
    text: "Hat",
    property: "hat",
  },
  {
    text: "Color",
    property: "hairColor",
  },
  {
    text: "Color",
    property: "clothingColor",
  },
  {
    text: "Color",
    property: "hatColor",
  },
];

// Interfaces

export interface Modal {
  handleClose: any;
  show: boolean;
}

export interface Parts {
  parts: any[];
}

// State managment

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

export const store = Avatar.create({
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
});
