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
    text: "Facial",
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
