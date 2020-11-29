import { EyeProps } from "@bigheads/core/dist/components/eyes/types";
import { HatProps } from "@bigheads/core/dist/components/hats/types";
import { MouthProps } from "@bigheads/core/dist/components/mouths/types";

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

export const eyes = [
  "normal",
  "squint",
  "simple",
  "happy",
  "content",
  "wink",
  "leftTwitch",
  "dizzy",
  "heart",
];
type eyes = typeof eyes[number];

export const mouth = ["serious", "grin", "openSmile", "lips", "open", "tongue"];
type mouth = typeof mouth[number];

export const facialHair = ["none", "stubble", "mediumBeard"];
type facialHair = typeof facialHair[number];

export const clothing = ["shirt", "dressShirt", "vneck", "dress"];
type clothing = typeof clothing[number];

export const hat = ["none", "beanie", "turban"];
type hat = typeof hat[number];

export const hatColor = ["white", "blue", "black", "red", "green"];
type hatColor = typeof hatColor[number];

export interface Avatar {
  [x: string]: string;
  skinTone: skinTone;
  eyes: eyes;
  mouth: mouth;
  facialHair: facialHair;
  body: body;
  accessory: accessory;
  hairColor: hairColor;
  hair: hair;
  clothingColor: clothingColor;
  clothing: clothing;
  hat: hat;
  hatColor: hatColor;
}

export interface Modal {
  handleClose: any;
  show: boolean;
}

export interface Parts {
  parts: any[];
}
