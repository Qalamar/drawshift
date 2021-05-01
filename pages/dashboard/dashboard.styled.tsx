import tw, { styled } from "twin.macro";

export const Container = styled.div`
  ${tw`flex flex-row w-screen h-screen overflow-hidden`}
`;

export const SplitPane = styled.div`
  ${tw`flex flex-col h-screen px-4 bg-gray-300 border-r pt-14 w-72`}
`;

export const Page = styled.div`
  ${tw`w-full`}
`;

export const Toolbar = styled.div`
  ${tw`flex justify-center w-full px-32 pt-12`}
`;

export const Search = styled.div`
  ${tw`flex flex-row w-full px-4 py-2 transition duration-200 border-2 border-gray-400 rounded-lg shadow-md bg-gray-50 dark:bg-none`}
`;

export const SearchButton = styled.div`
  ${tw`flex items-center justify-center w-1/12 h-full`}
`;

export const ToolbarButtons = styled.div`
  ${tw`flex items-center justify-end w-2/12 h-12 gap-8`}
`;

export const BoardList = styled.div`
  ${tw`grid w-full grid-cols-2 gap-8 px-32 pt-12`}
`;

export const Board = styled.div`
  ${tw`w-full h-64 transition duration-200 border-2 border-gray-400 rounded-lg shadow-md`}
`;
