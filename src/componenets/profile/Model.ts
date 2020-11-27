export const skinTones = ["brown", "light", "dark", "black", "red", "yellow"];
type skinTone = typeof skinTones[number];

type body = "chest" | "breasts" | string | undefined;
type accessory =
  | "none"
  | "roundGlasses"
  | "tinyGlasses"
  | "shades"
  | string
  | undefined;
type hairColor =
  | "blonde"
  | "orange"
  | "black"
  | "white"
  | "brown"
  | "blue"
  | "pink"
  | string
  | undefined;
type hair =
  | "none"
  | "long"
  | "bun"
  | "short"
  | "pixie"
  | "balding"
  | "buzz"
  | "afro"
  | "bob"
  | string
  | undefined;
type clothingColor =
  | "white"
  | "blue"
  | "black"
  | "green"
  | "red"
  | string
  | undefined;
type clothing =
  | "naked"
  | "shirt"
  | "dressShirt"
  | "vneck"
  | "tankTop"
  | "dress"
  | string
  | undefined;

export interface Avatar {
  skinTone: skinTone;
  body: body;
  accessory: accessory;
  hairColor: hairColor;
  hair: hair;
  clothingColor: clothingColor;
  clothing: clothing;
}

export interface Modal {
  handleClose: any;
  show: boolean;
}
