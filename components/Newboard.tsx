import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  CheckCircleIcon,
  LinkIcon,
  MinusCircleIcon,
} from "@heroicons/react/solid";
import { createBoard } from "lib/calls";
import { ui, canvas } from "lib/store";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const NewBoard = observer(() => {
  const [open, setOpen] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("title"));
  const onSubmit = (data) => {
    console.log(data);
    canvas.setTitle(data.title);
    canvas.setDescription(data.description);
    const canvasCopy = {
      user_id: canvas.user_id,
      title: canvas.title,
      description: canvas.description,
      board: canvas.board,
    };
    console.log(canvasCopy);
    router.push("/board");
    createBoard(canvasCopy);
  };

  const handleClose = () => {
    setOpen(false);
    ui.setNewBoard(false);
  };
  const router = useRouter();

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };
  return (
    // @ts-ignore
    <Transition.Root show={ui.createForm} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={handleClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            // @ts-ignore
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 transition-opacity bg-gray-900 bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              // @ts-ignore
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-96">
                <Transition.Child
                  // @ts-ignore
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    <div onClick={() => handleClose()}></div>
                  </div>
                </Transition.Child>
                <div className="px-4 py-6 bg-indigo-700 sm:px-6 font-monst">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-lg font-medium text-white">
                      New Project
                    </Dialog.Title>
                    <div></div>
                    <div className="flex items-center ml-3 h-7">
                      <button
                        type="button"
                        className="text-indigo-200 bg-indigo-700 rounded-md hover:text-white focus:outline-none "
                        onClick={() => handleClose()}
                      >
                        <span className="sr-only">Close panel</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-indigo-300">
                      Get started by filling in the information below to create
                      your new project.
                    </p>
                  </div>
                </div>
                <div className="h-full p-8 overflow-y-auto bg-gray-800 font-monst">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="pb-16 space-y-6"
                  >
                    <div>
                      <div className="flex flex-col items-start justify-between space-y-4">
                        <div className="w-full">
                          <label
                            htmlFor="project_name"
                            className="block text-sm font-medium text-gray-300"
                          >
                            Project name
                          </label>
                          <div className="mt-1">
                            <input
                              {...register("title", { required: true })}
                              className="w-full px-4 py-2 text-sm font-medium text-gray-700 transition duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              placeholder="Title..."
                            />
                            {errors.title?.type !== "required" ? (
                              <div className="flex mt-2 flex-row items-center text-green-400">
                                <CheckCircleIcon
                                  className="w-3 h-3 mr-2"
                                  aria-hidden="true"
                                />
                                <div className="text-xs">
                                  Must be at least 3 characters
                                </div>
                              </div>
                            ) : (
                              <div className="flex mt-2 flex-row items-center text-red-400">
                                <MinusCircleIcon
                                  className="w-3 h-3 mr-2"
                                  aria-hidden="true"
                                />
                                <div className="text-xs">
                                  Must be at least 3 characters
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-300"
                          >
                            Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              {...register("description")}
                              id="description"
                              name="description"
                              maxLength={100}
                              rows={4}
                              placeholder="Optional"
                              className="block px-4 py-2 w-full border-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <fieldset>
                        <legend className="text-sm font-medium text-gray-300">
                          Privacy
                        </legend>
                        <div className="mt-2 space-y-5">
                          <div className="relative flex items-start">
                            <div className="absolute flex items-center h-5">
                              <input
                                id="privacy_public"
                                name="privacy"
                                aria-describedby="privacy_public_description"
                                type="radio"
                                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                defaultChecked
                              />
                            </div>
                            <div className="text-sm pl-7">
                              <label
                                htmlFor="privacy_public"
                                className="font-medium text-gray-300"
                              >
                                Public access
                              </label>
                              <p
                                id="privacy_public_description"
                                className="text-gray-500"
                              >
                                Everyone with the link will see this project.
                              </p>
                            </div>
                          </div>

                          <div>
                            <div className="relative flex items-start">
                              <div className="absolute flex items-center h-5">
                                <input
                                  id="privacy_private"
                                  name="privacy"
                                  aria-describedby="privacy_private-to-project_description"
                                  type="radio"
                                  className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                              </div>
                              <div className="text-sm pl-7">
                                <label
                                  htmlFor="privacy_private"
                                  className="font-medium text-gray-300"
                                >
                                  Private to you
                                </label>
                                <p
                                  id="privacy_private_description"
                                  className="text-gray-500"
                                >
                                  You are the only one able to access this
                                  project.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div>
                      <hr className="border-gray-200" />
                      <div className="flex flex-col mt-4 space-space-y-4 space-between sm:flex-row sm:items-center sm:space-between sm:space-y-0">
                        <div className="flex-1">
                          <a
                            href="#"
                            className="group flex items-center text-sm text-indigo-600 hover:text-indigo-900 font-medium space-x-2.5"
                          >
                            <LinkIcon
                              className="w-5 h-5 text-indigo-500 group-hover:text-indigo-900"
                              aria-hidden="true"
                            />
                            <span>Copy link</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <button
                        // onClick={() => createBoard()}
                        type="submit"
                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => handleClose()}
                        className="flex-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
        <div>asd</div>
      </Dialog>
    </Transition.Root>
  );
});
export default NewBoard;
