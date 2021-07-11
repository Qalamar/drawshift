// @ts-nocheck
import { Dialog, Transition, Menu } from "@headlessui/react";
import {
  ArchiveIcon,
  BanIcon,
  BellIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  HomeIcon,
  LocationMarkerIcon,
  ReplyIcon,
  SaveAsIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import Spinner from "components/Spinner";
import { supabase } from "lib/initSupabase";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { useQuery } from "react-query";
import RangeSlider from "react-bootstrap-range-slider";
import { Main } from "../components/styled/board.styled";
import Header from "./board/Header";
import { compress, decompress } from "lzutf8";
import CanvasDraw from "react-canvas-draw";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import Head from "next/head";
import { observer } from "mobx-react-lite";
import { canvas } from "lib/store";
import { decomp, saveBoard } from "lib/calls";
const views = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
];

const colors = [
  "#e4fafa",
  "#30d343",
  "#FFFF33",
  "#6200F5",
  "#ed4e4e",
  "#141314",
];

let saveableCanvas: {
  clear: () => void;
  getSaveData: () => string;
  undo: () => void;
};

const navigation = [
  {
    name: "Inboxes",
    href: "#",
    children: [
      { name: "Technical Support", href: "#" },
      { name: "Sales", href: "#" },
      { name: "General", href: "#" },
    ],
  },
  { name: "Reporting", href: "#", children: [] },
  { name: "Settings", href: "#", children: [] },
];
const sidebarNavigation = [
  { name: "Open", href: "/dashboard", icon: InboxIcon, current: true },
  { name: "Archive", href: "/dashboard", icon: ArchiveIcon, current: false },
  {
    name: "Customers",
    href: "/dashboard",
    icon: UserCircleIcon,
    current: false,
  },
  { name: "Flagged", href: "/dashboard", icon: FlagIcon, current: false },
  { name: "Spam", href: "/dashboard", icon: BanIcon, current: false },
  { name: "Drafts", href: "/dashboard", icon: PencilAltIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const fetchUser = new Promise(function (resolve, reject) {
  // Make an asynchronous call and either resolve or reject
  if (!supabase.auth.session) supabase.auth.refreshSession();
  resolve(supabase.auth.user());
});

const Board = observer(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(views[1]);
  const [List, setList] = useState(true);
  const [user, setUser] = useState({
    user_metadata: {
      avatar_url: "",
      full_name: "",
    },
  });

  const [userData, setuserData] = useState();
  const [brushColor, setbrushColor] = useState("#0e0e0e0");
  const [brushRadius, setbrushRadius] = useState(5);
  const updateColors = (color: string) => {
    setbrushColor(color);
  };

  const router = useRouter();

  const Logout = () => {
    supabase.auth.signOut();
    router.push("/");
  };

  const updateBoard = async () => {
    const canvasCopy = {
      user_id: canvas.user_id,
      title: canvas.title,
      board: saveableCanvas.getSaveData(),
    };
    saveBoard(canvasCopy);
  };

  const goHome = () => {
    router.push("/dashboard");
  };
  useEffect(() => {
    console.log(user);
    supabase.auth.refreshSession();
    const userData = supabase.auth.user();
    console.log(userData);
    setuserData(userData);
    fetchPath(userData);
    setTimeout(() => {
      console.log(saveableCanvas.getSaveData());
    }, 1000);
  }, []);
  // @ts-ignore
  const { isLoading, error, data } = useQuery("userData", () =>
    fetchUser.then((res) => setUser(res))
  );

  const fetchPath = async (userData: any) => {
    // const { data: boards, error } = await supabase.from("boards").select("*");
    // console.log("boards", boards);
    // console.log("error", error);
    console.log(userData);

    // const { data, error } = await supabase
    //   .from("boards")
    //   .insert([{ user_id: userData.id, board: "Hmmm" }]);
    // console.log("boards", data);
    // console.log("error", error);
  };
  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-dark dark:bg-dark font-monst">
      {/* Top nav*/}
      <Head>
        <title>Drawshift | Boards</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="relative flex items-center flex-shrink-0 h-16 bg-dark dark:bg-dark">
        {/* Logo area */}

        {/* Menu button area */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 sm:pr-6 md:hidden">
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon className="block w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav area */}

        {/* Mobile menu, show/hide this `div` based on menu open/closed state */}

        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed inset-0 z-40 md:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
              enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
              enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
              leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
              leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
            >
              <nav
                className="fixed inset-0 z-40 w-full h-full bg-white sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
                aria-label="Global"
              >
                <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                  <a href="#">
                    <img
                      className="block w-auto h-8"
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500"
                      alt="Workflow"
                    />
                  </a>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 -mr-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="px-2 py-3 mx-auto max-w-8xl sm:px-4">
                  {navigation.map((item) => (
                    <Fragment key={item.name}>
                      <a
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="block py-2 pl-5 pr-3 text-base font-medium text-gray-500 rounded-md hover:bg-gray-100"
                        >
                          {child.name}
                        </a>
                      ))}
                    </Fragment>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4 mx-auto max-w-8xl sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.user_metadata.avatar_url}
                        alt=""
                      />
                    </div>
                    <div className="flex-1 min-w-0 ml-3">
                      <div className="text-base font-medium text-gray-800 truncate">
                        {data?.user_metadata.full_name}
                      </div>
                      <div className="text-sm font-medium text-gray-500 truncate">
                        {data?.user_metadata!.full_name}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex-shrink-0 p-2 ml-auto text-gray-400 bg-white hover:text-gray-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="px-2 mx-auto mt-3 space-y-1 max-w-8xl sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>

      {/* Bottom section */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Narrow sidebar*/}

        {/* Main area */}
        <Main>
          {/* Page header */}
          <div className="mx-auto mt-2 flex items-center justify-between flex-col md:flex-row max-w-7xl">
            <div className="flex-1 min-w-0">
              <nav className="flex" aria-label="Breadcrumb"></nav>
              <input
                className="px-4 py-2 flex-grow text-sm font-medium text-gray-700 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder={canvas.title}
              />
            </div>
            <div className="flex mt-5 lg:mt-0 lg:ml-4">
              <span className="">
                <button
                  onClick={() => goHome()}
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <HomeIcon
                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                    aria-hidden="true"
                  />
                  Home
                </button>
              </span>

              <span className="ml-3">
                <button
                  onClick={() => saveableCanvas.undo()}
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ReplyIcon
                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                    aria-hidden="true"
                  />
                  Undo
                </button>
              </span>

              <span className="ml-3">
                <button
                  onClick={() => saveableCanvas.clear()}
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <TrashIcon
                    className="w-5 h-5 mr-2 -ml-1 text-gray-500"
                    aria-hidden="true"
                  />
                  Clear
                </button>
              </span>

              <span className="ml-3">
                <button
                  onClick={() => updateBoard()}
                  type="button"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <SaveAsIcon
                    className="w-5 h-5 mr-2 -ml-1"
                    aria-hidden="true"
                  />
                  Save
                </button>
              </span>

              {/* Dropdown */}
            </div>
          </div>
          <div className="h-auto mx-auto mt-8 bg-white rounded-lg shadow-lg max-w-7xl">
            <CanvasDraw
              brushColor={brushColor}
              brushRadius={brushRadius}
              hideInterface={true}
              hideGrid={true}
              saveData={canvas.board}
              canvasWidth="auto"
              canvasHeight={450}
              lazyRadius="0"
              className="rounded-xl"
              ref={(canvasDraw: any) => (saveableCanvas = canvasDraw)}
            />
          </div>
          <div className="flex justify-between flex-col md:flex-row mx-auto mt-8 max-w-7xl">
            <div className="flex flex-row items-center justify-center px-5 space-x-6 bg-white shadow-lg h-14 rounded-xl">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7654 19.9379C8.17959 20.1042 5.83289 21.0891 4.50132 24.5979C4.34986 24.9981 3.9857 25.2411 3.56097 25.2411C2.84491 25.2411 0.630984 23.4577 0 23.0272C0.000644519 28.3349 2.4453 33 8.25048 33C13.1398 33 16.5003 30.1789 16.5003 25.2534C16.5003 25.0529 16.4584 24.8615 16.4378 24.6649L10.7654 19.9379ZM29.5125 0C28.5354 0 27.6196 0.432481 26.9209 1.06025C13.7463 12.8294 12.3754 13.1059 12.3754 16.5703C12.3754 17.4533 12.5849 18.295 12.9381 19.0646L17.0514 22.4922C17.5161 22.6082 17.995 22.6875 18.4945 22.6875C22.4976 22.6875 24.8178 19.7568 32.1041 6.15785C32.5798 5.23295 33 4.23393 33 3.19365C33 1.33031 31.3243 0 29.5125 0Z"
                  fill="#666FE4"
                />
              </svg>

              <RangeSlider
                value={brushRadius}
                min={2}
                max={16}
                onChange={(changeEvent: any) =>
                  setbrushRadius(changeEvent.target.value)
                }
              />
            </div>
            <div className="flex flex-row items-center justify-center mt-2 md:mt-0 px-5 space-x-6 bg-white shadow-lg h-14 rounded-xl">
              {colors.map((color) => (
                <div
                  onClick={() => updateColors(color)}
                  className="border border-gray-300 rounded-full shadow-lg w-7 h-7"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </Main>
      </div>
    </div>
  );
});

export default Board;
