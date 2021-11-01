// @ts-nocheck
import { Dialog, Listbox, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  FilterIcon,
  LogoutIcon,
  MailIcon,
  SelectorIcon,
  UsersIcon,
  ViewGridAddIcon,
  ViewGridIcon,
  ViewListIcon,
} from "@heroicons/react/solid";
import DeleteForm from "components/Settings";
import Spinner from "components/Spinner";
import dayjs from "dayjs";
import { decomp } from "lib/calls";
import { supabase } from "lib/initSupabase";
import { canvas, ui } from "lib/store";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "react-query";
import NewBoard from "../components/Newboard";
import {
  Header,
  HeaderButtons,
  HeaderContainer,
  HeaderContent,
  HeaderProfile,
  Main,
  Search,
  Searchbar,
  SearchbarContainer,
  Utils,
} from "../components/styled/dashboard.styled";

const tabs = [{ name: "Boards", href: "#", current: true }];

const views = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
];

const positions = [
  {
    id: 1,
    title: "Click here to create your first board",
    type: "Tutorial",
    location: "Canvas",
    department: "Private",
    closeDate: "2020-01-07",
    closeDateFull: "January 7, 2020",
  },
];

const navigation = [
  {
    name: "Inboxes",
    href: "/dashboard",
    children: [
      { name: "Technical Support", href: "/dashboard" },
      { name: "Sales", href: "/dashboard" },
      { name: "General", href: "/dashboard" },
    ],
  },
  { name: "Reporting", href: "/dashboard", children: [] },
  { name: "Settings", href: "/dashboard", children: [] },
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

interface User {
  user_metadata: {
    avatar_url: string;
    full_name: string;
  };
}
const Dasboard = observer(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selected, setSelected] = useState(views[1]);
  const [List, setList] = useState(true);
  const [user, setUser] = useState({
    user_metadata: {
      avatar_url: "",
      full_name: "",
    },
  });

  const router = useRouter();

  const Logout = () => {
    supabase.auth.signOut();
    router.push("/");
  };

  const [boards, setBoards] = useState();

  const fetchBoards = async () => {
    const { data: boards, error } = await supabase.from("boards").select("*");
    setBoards(boards);
    console.log("boards", boards);
    console.log("error", error);
  };

  const loadBoard = (id) => {
    console.log(boards[id]);
    canvas.setBoard(decomp(boards[id].board));
    canvas.setTitle(boards[id].title);
    canvas.setDescription(boards[id].description);
    console.log("title", boards[id].title);
    router.push("/board");
  };
  useEffect(() => {
    fetchBoards();
    supabase.auth.refreshSession();
    const data = supabase.auth.user();
    canvas.setUserId(data.id);
    console.log(data);
  }, []);
  // @ts-ignore
  const { isLoading, error, data } = useQuery("userData", () =>
    fetchUser.then((res) => setUser(res))
  );

  if (isLoading || !boards) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-primary font-monst">
      <Head>
        <title>Drawshift | Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DeleteForm />
      <Toaster position="bottom-center" reverseOrder={false} />

      <NewBoard />
      {/* Top nav*/}
      <header className="relative flex items-center flex-shrink-0 h-16 bg-primary">
        {/* Logo area */}
        {/* <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <a
            href="#"
            className="flex items-center justify-center w-16 h-16 bg-none md:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
          >
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt="Workflow"
            />
          </a>
        </div> */}

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
        {/* <nav
          aria-label="Sidebar"
          className="hidden shadow-xl md:block md:flex-shrink-0 md:bg-gray-800 md:overflow-y-auto"
        >
          <div className="relative flex flex-col w-20 p-3 space-y-3">
            {sidebarNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-400 hover:bg-gray-700",
                  "flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
                )}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav> */}

        {/* Main area */}
        <Main>
          {/* Page header */}
          <Header>
            <HeaderContainer>
              <HeaderContent>
                <HeaderProfile>
                  {/* Profile */}
                  <div className="flex items-center">
                    <img
                      className="hidden w-16 h-16 border-2 border-white border-solid rounded-full sm:block"
                      src={user.user_metadata.avatar_url}
                      alt=""
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          className="w-16 h-16 border-2 border-white border-solid rounded-full sm:hidden"
                          src={user.user_metadata.avatar_url}
                          alt=""
                        />
                        <h1 className="ml-3 text-3xl font-bold text-white sm:truncate">
                          Good morning, {user.user_metadata.full_name}
                        </h1>
                      </div>
                      <dl className="flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Account status</dt>
                        <dd className="flex items-center mt-3 text-sm font-medium text-gray-200 capitalize sm:mr-6 sm:mt-0">
                          <CheckCircleIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-200"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </HeaderProfile>
                <HeaderButtons>
                  <button
                    type="button"
                    onClick={() => {
                      const toastId = toast.loading("Coming Soon!");
                      setTimeout(() => {
                        toast.dismiss(toastId);
                      }, 4000);
                    }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 rounded-md shadow-lg bg-secondary hover:bg-primary hover:text-gray-100 focus:outline-none"
                  >
                    Settings
                    <MailIcon
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => ui.setDeleteForm(true)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 rounded-md shadow-lg bg-secondary hover:bg-primary hover:text-gray-100 focus:outline-none"
                  >
                    Logout
                    <LogoutIcon
                      className="w-5 h-5 ml-2 -mr-1"
                      aria-hidden="true"
                    />
                  </button>
                </HeaderButtons>
              </HeaderContent>
            </HeaderContainer>
          </Header>

          <div className="mt-8">
            <Searchbar>
              <SearchbarContainer>
                <Search>
                  <input
                    className="w-full px-4 py-3 text-sm font-medium text-gray-300 transition duration-200 rounded-md shadow-sm bg-secondary hover:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    placeholder="Search..."
                  />
                  <SearchIcon
                    className="w-5 h-5 -ml-8 text-gray-400"
                    aria-hidden="true"
                  />
                </Search>
                <button
                  type="button"
                  onClick={() => {
                    const toastId = toast.loading("Coming Soon!");
                    setTimeout(() => {
                      toast.dismiss(toastId);
                    }, 4000);
                  }}
                  className="items-center p-2 text-gray-400 transition duration-200 rounded-md shadow-sm w-11 h-11 bg-secondary font-monst dark:text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:text-gray-100 focus:ring-indigo-500"
                >
                  <FilterIcon
                    className="w-full h-full fill-current "
                    aria-hidden="true"
                  />
                </button>
                <button
                  onClick={() => ui.setNewBoard(true)}
                  type="button"
                  className="relative inline-flex items-center p-2 ml-2 text-gray-400 transition duration-200 rounded-md shadow w-11 h-11 bg-secondary font-monst dark:text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:text-gray-100 focus:ring-indigo-500"
                >
                  <ViewGridAddIcon
                    className="w-full h-full fill-current"
                    aria-hidden="true"
                  />
                </button>
              </SearchbarContainer>
            </Searchbar>

            <Utils>
              <div className="flex">
                <div className="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                  <button
                    type="button"
                    className="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Use list view</span>
                  </button>
                  <button
                    type="button"
                    className="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                    <span className="sr-only">Use grid view</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-3 sm:mt-2">
                {/* Mobile View Selector */}
                <div className="sm:hidden">
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">
                          Assigned to
                        </Listbox.Label>
                        <div className="relative mt-1">
                          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <span className="block truncate">
                              {selected.name}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                              <SelectorIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options
                              static
                              className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                              {views.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "text-white bg-indigo-600"
                                        : "text-gray-900",
                                      "cursor-default select-none relative py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={person}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <span
                                        className={classNames(
                                          selected
                                            ? "font-semibold"
                                            : "font-normal",
                                          "block truncate"
                                        )}
                                      >
                                        {person.name}
                                      </span>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
                {/* Desktop View Selector */}
                <div className="hidden sm:block">
                  <div className="flex items-center border-b border-gray-800">
                    <nav
                      className="flex flex-1 -mb-px space-x-6 xl:space-x-8"
                      aria-label="Tabs"
                    >
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          aria-current={tab.current ? "page" : undefined}
                          className={classNames(
                            tab.current
                              ? "border-gray-200 text-gray-200"
                              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                            "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                          )}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                    <div className="hidden ml-6 bg-secondary p-0.5 rounded-lg items-center sm:flex">
                      <button
                        type="button"
                        onClick={() => setList(true)}
                        className={`p-1.5 rounded-md hover:shadow-sm focus:outline-none ${
                          List ? "bg-tertiary text-white" : "text-gray-400"
                        }`}
                      >
                        <ViewListIcon className="w-5 h-5" aria-hidden="true" />
                        <span className="sr-only">Use list view</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setList(false)}
                        className={`p-1.5 rounded-md hover:shadow-sm focus:outline-none ${
                          List ? "text-gray-400" : "bg-tertiary text-white"
                        }`}
                      >
                        <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
                        <span className="sr-only">Use grid view</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <section className="pb-16 mt-8" aria-labelledby="gallery-heading">
                <h2 id="gallery-heading" className="sr-only">
                  Recently viewed
                </h2>

                {List && (
                  <ul
                    role="list"
                    className="grid grid-cols-1 divide-y divide-gray-800 rounded-lg shadow-lg bg-secondary border-1 gap-x-4 gap-y-0"
                  >
                    {boards.map((board, index) => (
                      <li key={board.id}>
                        <a
                          onClick={() => loadBoard(index)}
                          href="#"
                          className="block transition duration-200 hover:bg-gray-800"
                        >
                          <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-300 truncate">
                                {board.title}
                              </p>
                              <div className="flex flex-shrink-0 ml-2">
                                <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                                  Manual
                                </p>
                              </div>
                            </div>
                            <div className="mt-2 sm:flex sm:justify-between">
                              <div className="sm:flex">
                                <p className="flex items-center text-sm text-gray-500">
                                  <UsersIcon
                                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  Private
                                </p>
                              </div>
                              <div className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0">
                                <CalendarIcon
                                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <p>
                                  Created at{" "}
                                  <time dateTime={board.closeDate}>
                                    {dayjs(board.inserted_at).format(
                                      "MMMM D, YYYY"
                                    )}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {!List && (
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-2 xl:gap-x-8"
                  >
                    {boards.map((file, index) => (
                      <li key={file.name} className="relative">
                        <div
                          onClick={() => loadBoard(index)}
                          className={classNames(
                            file.current
                              ? "ring-2 ring-offset-2 ring-indigo-500"
                              : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                            "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                          )}
                        >
                          <div className="w-full h-auto bg-white rounded-lg shadow-lg">
                            <CanvasDraw
                              hideInterface={true}
                              hideGrid={true}
                              canvasWidth="auto"
                              canvasHeight={450}
                              saveData={decomp(boards[index].board)}
                              lazyRadius="0"
                              className="pointer-events-none rounded-x"
                            />
                          </div>

                          <button
                            type="button"
                            className="absolute inset-0 focus:outline-none"
                          >
                            <span className="sr-only">
                              View details for {file.name}
                            </span>
                          </button>
                        </div>
                        <p className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                          {file.name}
                        </p>
                        <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                          {file.size}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Utils>
          </div>
        </Main>
      </div>
    </div>
  );
});
export default Dasboard;
