import tw, { styled } from "twin.macro";

export const Wrapper = styled.header`
  ${tw`justify-center px-4 py-16 mx-auto max-w-7xl md:flex md:py-10 2xl:py-28 sm:px-6 lg:px-8`}
`;

export const Title = styled.p`
  ${tw`mt-1 text-4xl font-extrabold text-gray-100 font-monst sm:text-5xl sm:tracking-tight lg:text-6xl`}
`;

export const Subtitle = styled.p`
  ${tw`max-w-xl mx-auto mt-5 text-xl text-gray-500 font-quick`}
`;

export const Feature = styled.div`
  ${tw`flex flex-row items-center text-orange-400`}
`;
