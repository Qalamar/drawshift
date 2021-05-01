import { Dialog, Transition } from "@headlessui/react";
import { LoginIcon, XIcon } from "@heroicons/react/solid";
import { Auth } from "@supabase/ui";
import { Fragment, useRef } from "react";
import { useRecoilState } from "recoil";
import { supabase } from "../lib/initSupabase";
import { authPopup } from "../lib/store";
//@ts-ignore
const Container = (props) => {
  const [auth, setAuthPopup] = useRecoilState(authPopup);

  const { user } = Auth.useUser();
  if (user)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="font-quick">
          Signed in as: <span className="font-bold">{user.email}</span>
        </div>
        <button onClick={() => props.supabaseClient.auth.signOut()}></button>
        <button
          type="button"
          onClick={() => setAuthPopup(true)}
          className="relative inline-flex items-center w-auto px-4 py-2 mt-6 text-sm font-medium text-white transition duration-200 bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          <LoginIcon className="w-5 h-5 mr-2 -ml-1" aria-hidden="true" />
          <span>Sign out</span>
        </button>
      </div>
    );
  return props.children;
};

const AuthPopup = () => {
  const [auth, setAuthPopup] = useRecoilState(authPopup);
  const { user } = Auth.useUser();

  const cancelButtonRef = useRef();

  function closeModal() {
    setAuthPopup(false);
  }

  function openModal() {
    setAuthPopup(true);
  }
  return (
    <Transition
      show={auth}
      //@ts-ignore
      as={Fragment}
      enter="transition-opacity duration-300 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        open={auth}
        initialFocus={cancelButtonRef}
        static
        onClose={closeModal}
        className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto font-monst"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

        <div className="z-20 flex flex-col bg-white rounded-lg opacity-100">
          <div className="flex justify-end pt-3 pr-3">
            <button className="focus:outline-none" onClick={() => closeModal()}>
              <XIcon className="w-5 h-5 text-green-400" aria-hidden="true" />
            </button>
          </div>

          <div className="px-16 py-8">
            <Auth.UserContextProvider supabaseClient={supabase}>
              <Container supabaseClient={supabase}>
                <Auth
                  supabaseClient={supabase}
                  providers={["google", "github"]}
                />
              </Container>
            </Auth.UserContextProvider>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AuthPopup;
