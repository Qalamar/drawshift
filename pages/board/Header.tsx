/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";

import { FC, Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

interface Canvas {
  clear: any;
  getSaveData: any;
  undo: any;
}
const Header: FC<Canvas> = (canvas) => {
  return (
    
  );
};
export default Header;
