import React from "react";
import { avatar } from "../../store/Store";
import { Parts } from "./AvatarProps";
import Button from "../common/Button";

const AvatarButtons = ({ parts }: Parts) => {
  return (
    <div className="justify-center my-6 px-3 grid grid-cols-3 gap-3">
      {parts.map((part: any) => (
        <Button
          key={part.property}
          Sharp
          whileTap={{ scale: 0.9 }}
          onClick={() => avatar.setProperty(part.property)}
        >
          {part.text}
        </Button>
      ))}
    </div>
  );
};

export default AvatarButtons;
