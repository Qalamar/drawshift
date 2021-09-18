// @ts-nocheck
import { Dialog, Transition, Listbox } from "@headlessui/react";
import {
  ArchiveIcon,
  BanIcon,
  FlagIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ReplyIcon,
  SaveAsIcon,
  TrashIcon,
  CheckIcon,
  SelectorIcon,
} from "@heroicons/react/solid";
import { supabase } from "lib/initSupabase";
import { observer } from "mobx-react-lite";
import Head from "next/head";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { Main } from "../components/styled/board.styled";
import { HexColorPicker } from "react-colorful";

let saveableCanvas: {
  clear: () => void;
  getSaveData: () => string;
  undo: () => void;
};

const people = ["Input", "Output"];

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
  { name: "Open", href: "#", icon: InboxIcon, current: true },
  { name: "Archive", href: "#", icon: ArchiveIcon, current: false },
  { name: "Customers", href: "#", icon: UserCircleIcon, current: false },
  { name: "Flagged", href: "#", icon: FlagIcon, current: false },
  { name: "Spam", href: "#", icon: BanIcon, current: false },
  { name: "Drafts", href: "#", icon: PencilAltIcon, current: false },
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

const getNodeId = () => `randomnode_${+new Date()}`;

const Chart = observer(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [input, setInput] = useState("initialState");
  const [selected, setSelected] = useState("Input");
  const [color, setColor] = useState("#aabbcc");
  const [user, setUser] = useState({
    user_metadata: {
      avatar_url: "",
      full_name: "",
    },
  });
  const [elements, setElements] = useState([
    {
      id: "1",
      type: "input", // input node
      data: { label: "Input Node" },
      position: { x: 250, y: 25 },
      style: {
        border: "1px solid #777",
        padding: 10,
        backgroundColor: "#f2a2c2",
      },
    },
    // default node
    {
      id: "2",
      // you can also pass a React component as a label
      data: { label: "default node" },
      position: { x: 100, y: 125 },
    },
    {
      id: "3",
      type: "output", // output node
      data: { label: "Output Node" },
      position: { x: 250, y: 250 },
    },
    // animated edge
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e2-3", source: "2", target: "3", animated: true },
  ]);
  const [userData, setuserData] = useState();
  const [socketUrl, setSocketUrl] = useState(
    "ws://localhost:3003/ws/chat/someroom/"
  );
  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket(socketUrl);
  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  // Updating the position
  // useEffect(() => {
  //   if (lastMessage != null) {
  //     setElements((els) =>
  //       els.map((el) => {
  //         let v = lastMessage.data.split(",");
  //         if (el.id === v[1]) {
  //           el.position = {
  //             x: parseInt(v[3]),
  //             y: parseInt(v[5]),
  //           };
  //           v = [0, 0, 0, 0, 0, 0];
  //         }
  //         return el;
  //       })
  //     );
  //   }
  // }, [lastMessage]);

  const onUpdateGraph = (e, n) => {
    setElements((els) =>
      els.map((el) => {
        if (el.id === n.id) {
          el.position = {
            x: n.position.x,
            y: n.position.y,
          };
        }
        return el;
      })
    );
    let a = [];
    a.push(n);
    a.push({ typeofoperation: "move" });
    sendJsonMessage(a);
  };

  // Removing node/edge
  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => removeElements(elementsToRemove, els));
    console.log(elementsToRemove);
    elementsToRemove.push({ typeofoperation: "remove" });
    sendJsonMessage(elementsToRemove);
  };
  // Adding edge
  const onConnect = (params) => {
    setElements((els) => addEdge(params, els));
    let a = [];
    a.push(params);
    a.push({ typeofoperation: "addEdge" });
    sendJsonMessage(a);
  };

  const onElementClick = (event, element) => {
    console.log(event);
    console.log(element);
  };
  // Adding a node
  const addNode = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: "Added node" },
      position: {
        x: Math.random() * window.innerWidth - 100,
        y: Math.random() * window.innerHeight,
      },
    };
    setElements((els) => els.concat(newNode));
    let a = [];
    a.push(newNode);
    a.push({ typeofoperation: "add" });
    sendJsonMessage(a);
  }, [setElements]);

  // Handling different updates
  useEffect(() => {
    // avoiding issues on startup
    if (lastJsonMessage != null) {
      let typeofoperation = lastJsonMessage["message"].pop()["typeofoperation"];
      if (typeofoperation == "remove") {
        setElements((els) => removeElements(lastJsonMessage["message"], els));
      } else if (typeofoperation == "move") {
        let n = lastJsonMessage["message"][0];
        setElements((els) =>
          els.map((el) => {
            if (el.id === n.id) {
              el.position = {
                x: n.position.x,
                y: n.position.y,
              };
            }
            return el;
          })
        );
      } else if (typeofoperation == "add") {
        let newNode = lastJsonMessage["message"][0];
        console.log(newNode);
        setElements((els) => els.concat(newNode));
      } else if (typeofoperation == "addEdge") {
        let newEdge = lastJsonMessage["message"][0];
        setElements((els) => addEdge(newEdge, els));
      }
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    console.log(user);
    // supabase.auth.refreshSession();
    // const userData = supabase.auth.user();
    console.log(userData);
    setuserData(userData);
  }, []);

  // @ts-ignore
  // const { isLoading, error, data } = useQuery("userData", () =>
  //   fetchUser.then((res) => setUser(res))
  // );

  // if (isLoading) return <Spinner />;

  // if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100 dark:bg-dark font-monst">
      {/* Top nav*/}
      <Head>
        <title>Drawshift | Boards</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="relative flex items-center flex-shrink-0 h-16 bg-gray-100 dark:bg-dark">
        {/* Logo area */}
        <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
          <a
            href="#"
            className="flex items-center justify-center w-16 h-16 bg-none md:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:w-20"
          >
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
          </a>
        </div>

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
                  {/* <div className="flex items-center px-4 mx-auto max-w-8xl sm:px-6">
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
                  </div> */}
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
        <nav
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
        </nav>

        {/* Main area */}
        <Main>
          {/* Page header */}
          <div className="flex flex-col items-center justify-between mx-auto mt-2 md:flex-row max-w-7xl">
            <div className="flex-1 min-w-0">
              <nav className="flex" aria-label="Breadcrumb"></nav>
              <input
                className="flex-grow px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Board 01"
              />
            </div>
            <div className="flex mt-5 lg:mt-0 lg:ml-4">
              <span className="">
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
                  onClick={() => saveBoard()}
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
          <div className="flex flex-row h-auto mx-auto mt-8 bg-white rounded-lg shadow-lg max-w-7xl">
            <div className="w-2/3 h-[600px]">
              <ReactFlow
                elements={elements}
                onNodeDragStop={onUpdateGraph}
                onElementsRemove={onElementsRemove}
                onElementClick={onElementClick}
                onConnect={onConnect}
              >
                <MiniMap
                  nodeStrokeColor={(n) => {
                    if (n.style?.background) return n.style.background;
                    if (n.type === "input") return "#0041d0";
                    if (n.type === "output") return "#ff0072";
                    if (n.type === "default") return "#1a192b";

                    return "#eee";
                  }}
                  nodeColor={(n) => {
                    if (n.style?.background) return n.style.background;

                    return "#fff";
                  }}
                  nodeBorderRadius={2}
                />
                <Controls />
                <Background color="#aaa" gap={16} />
              </ReactFlow>
            </div>
            <div className="w-1/3 flex flex-col py-20 px-12 space-y-4 bg-gray-800 rounded-r-lg h-[600px]">
              <div className="flex flex-col">
                <div className="block mb-4 text-sm font-medium text-gray-200">
                  Node Content
                </div>
                <input
                  className="p-2 text-sm border border-gray-100 shadow-xl"
                  placeholder="Type your node text"
                />
              </div>

              <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <>
                    <Listbox.Label className="block text-sm font-medium text-gray-200">
                      Type
                    </Listbox.Label>
                    <div className="relative mt-1">
                      <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{selected}</span>
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
                          {people.map((person) => (
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
                                    {person}
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
              <div className="flex flex-col items-center pt-12">
                <HexColorPicker color={color} onChange={setColor} />
              </div>
            </div>
          </div>
          {/* <span>The WebSocket is currently {connectionStatus}</span> */}
          <button onClick={addNode}>Add node</button>
        </Main>
      </div>
    </div>
  );
});

export default Chart;
