import tw, { styled } from "twin.macro";

export const Page = styled.div`
  ${tw`w-screen h-screen justify-center items-center flex`}
`;
export const Container = styled.div`
  ${tw`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}
`;
export const Content = styled.div`
  ${tw`flex flex-col justify-between lg:flex-row`}
`;
export const User = styled.div`
  ${tw`mb-12 lg:max-w-lg lg:pr-5 lg:mb-0`}
`;
export const Welcome = styled.h2`
  ${tw`max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none`}
`;
export const Nickname = styled.span`
  ${tw`inline-block text-deep-purple-accent-400`}
`;
export const Text = styled.p`
  ${tw`text-base text-gray-700 md:text-lg`}
`;

export const Description = styled.p`
  ${tw`max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5`}
`;

export const Room = styled.div`
  ${tw`px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5`}
`;

export const CreateButton = styled.div`
  ${tw`inline-flex items-center justify-center cursor-pointer w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
`;

export const JoinButton = styled.div`
  ${tw`inline-flex items-center justify-center cursor-pointer w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none`}
`;
