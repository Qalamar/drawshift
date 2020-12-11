import tw, { styled } from "twin.macro";

export const PopupContainer =
  "flex justify-center fixed w-screen h-screen z-50 items-center";

export const Backdrop = styled.div`
  ${tw`absolute inset-0 bg-gray-900 opacity-75`}
`;

export const Container = styled.div`
  ${tw`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle max-w-lg w-full`}
`;

export const Card = styled.div`
  ${tw`bg-white pt-5 pb-4 sm:p-6 sm:pb-2`}
`;

export const Title = styled.h3`
  ${tw`text-xl mt-4 font-semibold text-center sm:text-2xl`}
`;

export const StepProgress = styled.div`
  ${tw`bg-gray-50 py-3 sm:px-9 grid grid-cols-5`}
`;

export const Popup = styled.div`
  ${tw`inset-0 transition-opacity`}
`;

export const Divider = styled.hr`
  ${tw`w-full my-8 border-gray-300`}
`;
