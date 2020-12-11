import { motion } from "framer-motion";
import tw, { styled } from "twin.macro";

interface ButtonProps {
  Primary?: boolean;
  Rounded?: boolean;
  Sharp?: boolean;
}

const Button = styled(motion.button)`
  ${tw`flex justify-center items-center text-vod-primary cursor-pointer font-medium flex justify-center items-center w-auto h-12 px-4 transition duration-200`}
  ${({ Primary }: ButtonProps) =>
    Primary &&
    tw`bg-vod-primary text-white shadow-card rounded-full hover:opacity-80`}
  ${({ Rounded }: ButtonProps) =>
    Rounded && tw`rounded-full shadow-card hover:opacity-80`}
  ${({ Sharp }: ButtonProps) =>
    Sharp &&
    tw`capitalize border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-sm text-gray-700 hover:bg-gray-50`}
`;

export default Button;
