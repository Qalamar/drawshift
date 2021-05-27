import { Dialog, Transition } from "@headlessui/react";
import { LoginIcon, XIcon } from "@heroicons/react/solid";
import { Auth } from "@supabase/ui";
import { ui } from "lib/store";
import { Fragment, useRef, useState } from "react";
import { supabase } from "../lib/initSupabase";
import { observer } from "mobx-react-lite";

const AuthPopup = observer(() => {
  const { user } = Auth.useUser();

  const cancelButtonRef = useRef();

  function closeModal() {
    ui.setLoginForm(false);
  }

  return (
    <Transition
      show={ui.loginForm}
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
        open={ui.loginForm}
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
              <Auth
                supabaseClient={supabase}
                providers={["google", "github"]}
              />
            </Auth.UserContextProvider>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

export default AuthPopup;
