import { FC } from "react";
import * as Icons from "@heroicons/react/solid";

const Icon: FC<{ icon: string }> = (props) => {
  const { ...icons } = Icons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className="mr-2 w-14 h-14" aria-hidden="true" />
    </>
  );
};

export default Icon;
