import { Disclosure } from "@headlessui/react";
import { LoginIcon } from "@heroicons/react/solid";
import produce from "immer";
import { useRecoilState } from "recoil";
import { authPopup, navState } from "../utils/store";
import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [NavState, setNavState] = useRecoilState(navState);
  const [auth, setAuthPopup] = useRecoilState(authPopup);
  const { user } = Auth.useUser();

  const handleUpdates = (id) => {
    setNavState({
      navigation: produce(NavState.navigation, (draft) => {
        draft.map((a) => (a.current = false));
        draft[id].current = true;
      }),
    });
  };
  return (
    <Disclosure as="nav" className="relative bg-gray-800">
      {({ open }) => (
        <>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex items-center mr-2 -ml-2 md:hidden">
                  {/* Mobile menu button */}
                </div>
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {!!user && (
                    <button
                      onClick={() => supabase.auth.signOut()}
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none"
                    >
                      <div
                        className="invisible w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                      />
                      <span>Logout</span>
                    </button>
                  )}
                  {!!user ? (
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    >
                      <LoginIcon
                        className="w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                      />
                      <span>Launch</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setAuthPopup(true)}
                      className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                    >
                      <LoginIcon
                        className="w-5 h-5 mr-2 -ml-1"
                        aria-hidden="true"
                      />
                      <span>Sign in</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
