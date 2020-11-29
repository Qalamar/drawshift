// Avatar possible props

export const skinTone = ["brown", "light", "dark", "black", "red", "yellow"];
export const body = ["chest", "breasts"];
export const accessory = ["none", "roundGlasses", "tinyGlasses", "shades"];
export const mouth = ["serious", "grin", "openSmile", "lips", "open", "tongue"];
export const facialHair = ["none", "stubble", "mediumBeard"];
export const clothing = ["shirt", "dressShirt", "vneck", "dress"];
export const hat = ["none", "beanie", "turban"];
export const hatColor = ["white", "blue", "black", "red", "green"];
export const hairColor = [
  "blonde",
  "orange",
  "black",
  "white",
  "brown",
  "blue",
  "pink",
];
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
export const clothingColor = ["white", "blue", "black", "green", "red"];
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

// Generate types from the previous arrays

type skinTone = typeof skinTone[number];
type body = typeof body[number];
type accessory = typeof accessory[number];
type hairColor = typeof hairColor[number];
type hair = typeof hair[number];
type clothingColor = typeof clothingColor[number];
type eyes = typeof eyes[number];
type mouth = typeof mouth[number];
type facialHair = typeof facialHair[number];
type clothing = typeof clothing[number];
type hat = typeof hat[number];
type hatColor = typeof hatColor[number];

// Complex Types - Parts with color and style
export const hairParts = [
  { property: "hair", type: hair },
  { property: "hairColor", type: hairColor },
];

export const clothingParts = [
  { property: "clothing", type: clothing },
  { property: "clothingColor", type: clothingColor },
];

export const hatParts: Array<{ property: string; type: any }> = Array(
  { property: "hat", type: hat },
  { property: "hatColor", type: hatColor }
);

// Simple Types - Parts with style only

export const bodyPsarts = [
  { property: "body", type: body },
  { property: "accessory", type: accessory },
  { property: "skinTone", type: skinTone },
];

export const faceParts = [
  { property: "eyes", type: eyes },
  { property: "mouth", type: mouth },
  { property: "facialHair", type: facialHair },
];

export const bodyParts: Array<{ property: string; type: any }> = Array(
  { property: "body", type: body },
  { property: "accessory", type: accessory },
  { property: "skinTone", type: skinTone }
);

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
