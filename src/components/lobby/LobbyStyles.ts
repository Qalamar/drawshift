export const styles = {
  // Sub components
  popup: "flex justify-center fixed w-screen h-screen z-50 items-center",
  backdrop: "absolute inset-0 bg-gray-900 opacity-75",
  cardContainer:
    "inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full",
  card: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
  title: "text-xl mt-4 font-semibold text-center sm:text-2xl",
  stepsContainer: "bg-gray-50 px-4 py-3 md:px-6 grid grid-cols-2 gap-20",
  input:
    "flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline",
  divider: "mt-4 justify-center m-auto w-64 border-gray-300",
  // index.tsx layout
  root: "w-screen h-screen justify-center items-center flex",
  contentContainer:
    "px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20",
  content: "flex flex-col justify-between lg:flex-row",
  // First Column, dedicated to text info
  user: "mb-12 lg:max-w-lg lg:pr-5 lg:mb-0",
  welcomeText:
    "max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none",
  normalText: "text-base text-gray-700 md:text-lg",
  // Second column, concers rooms
  room: "px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5",
  createButton:
    "inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none",
  decriptionText: "max-w-md px-5 mb-3 text-xs text-gray-600 sm:text-sm md:mb-5",
  nameText: "inline-block text-deep-purple-accent-400",
  roomCode: "text-center text-5xl text-deep-purple-accent-400 font-bold p-4",
  joinButton:
    "inline-flex items-center justify-center w-full h-12 px-6 font-semibold transition duration-200 bg-white border border-gray-300 rounded md:w-auto hover:bg-gray-100 focus:shadow-outline focus:outline-none",
};
