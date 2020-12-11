import React from "react";
import { avatar } from "../../store/Store";
import { Parts } from "./AvatarProps";
import Button from "../common/Button";
import tw, { styled } from "twin.macro";

const ButtonList = styled.div`
  ${tw`justify-center my-6 px-3 grid grid-cols-3 gap-3`}
`;

const AvatarButtons = ({ parts }: Parts) => {
  return (
    <ButtonList>
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
    </ButtonList>
  );
};

export default AvatarButtons;
