import tw, { styled } from "twin.macro";

export const CardWrapper = styled.div`
  ${tw`relative -mt-24 font-monst`}
`;

export const CardBackground = styled.div`
  ${tw`m-auto overflow-hidden rounded-lg shadow-xl max-w-7xl sm:px-6 lg:px-8 bg-gradient-to-r from-orange-400 to-pink-500 lg:grid lg:grid-cols-2 lg:gap-4`}
`;

export const CardContent = styled.div`
  ${tw`px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20`}
`;

export const CardTitle = styled.h2`
  ${tw`text-3xl font-extrabold text-white sm:text-4xl`}
`;

export const CardButton = styled.button`
  ${tw`inline-flex items-center px-6 py-3 mt-8 text-base font-medium text-red-600 bg-orange-100 border border-transparent rounded-md shadow hover:text-red-500`}
`;

export const CardImage = styled.img`
  ${tw`object-cover transform translate-x-6 rounded-md sm:translate-x-16`}
`;
