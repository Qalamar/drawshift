export const skinTone = ["brown", "light", "dark", "black", "red", "yellow"];
type skinTone = typeof skinTone[number];

export const body = ["chest", "breasts"];
type body = typeof body[number];

export const accessory = ["none", "roundGlasses", "tinyGlasses", "shades"];
type accessory = typeof accessory[number];

export const hairColor = [
  "blonde",
  "orange",
  "black",
  "white",
  "brown",
  "blue",
  "pink",
];
type hairColor = typeof hairColor[number];

export const hair = [
  "none",
  "long",
  "bun",
  "short",
  "pixie",
  "balding",
  "buzz",
  "afro",
  "bob",
];
type hair = typeof hair[number];

export const clothingColor = ["white", "blue", "black", "green", "red"];
type clothingColor = typeof clothingColor[number];

export const clothing = ["shirt", "dressShirt", "vneck", "dress"];
type clothing = typeof clothing[number];

export interface Avatar {
  [x: string]: string;
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
