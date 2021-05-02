import tw, { styled } from "twin.macro";

export const Search = styled.div`
  ${tw`flex flex-row w-full px-4 py-1 mr-4 transition duration-200 border-2 border-gray-800 rounded-lg shadow-md bg-gray-50 dark:bg-none`}
`;

export const SearchButton = styled.div`
  ${tw`flex items-center justify-center w-1/12 h-full`}
`;

export const Main = styled.main`
  ${tw`relative z-0 flex-1 pb-8 overflow-y-auto`}
`;

export const Header = styled.div`
  ${tw`bg-white shadow dark:bg-dark dark:border-b dark:border-gray-300`}
`;

export const HeaderContainer = styled.div`
  ${tw`px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8`}
`;

export const HeaderContent = styled.div`
  ${tw`pb-6 md:flex md:items-center md:justify-between`}
`;

export const HeaderProfile = styled.div`
  ${tw`flex-1 min-w-0 font-monst`}
`;

export const HeaderButtons = styled.div`
  ${tw`flex mt-6 space-x-3 md:mt-0 md:ml-4 font-monst`}
`;
export const Searchbar = styled.div`
  ${tw`max-w-6xl px-4 mx-auto sm:px-6 lg:px-8`}
`;

export const SearchbarContainer = styled.div`
  ${tw`flex flex-row w-full h-12`}
`;
export const Utils = styled.div`
  ${tw`max-w-6xl px-4 pt-8 mx-auto sm:px-6 lg:px-8`}
`;
export const HeadsersCosntainer = styled.div`
  ${tw``}
`;
