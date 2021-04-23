import { atom } from "recoil";

export const phaseState = atom({
  key: "phaseState", // unique ID (with respect to other atoms/selectors)
  default: { phase: 2 }, // default value (aka initial value)
});

export const navState = atom({
  key: "navState", // unique ID (with respect to other atoms/selectors)
  default: {
    navigation: [{ name: "About us", href: "/history", current: false }],
  }, // default value (aka initial value)
});
