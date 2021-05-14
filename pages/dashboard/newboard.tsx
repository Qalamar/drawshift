/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XIcon } from "@heroicons/react/outline";
import { PencilIcon, PlusIcon } from "@heroicons/react/solid";

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden"
        open={open}
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
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
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
                    <button
                      className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full p-8 overflow-y-auto bg-white">
                  <div className="pb-16 space-y-6">
                    <div>
                      <div className="block w-full overflow-hidden rounded-lg aspect-w-10 aspect-h-7">
                        <img
                          src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80"
                          alt=""
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-start justify-between mt-4">
                        <div>
                          <h2 className="text-lg font-medium text-gray-900">
                            <span className="sr-only">Details for </span>
                            IMG_4985.HEIC
                          </h2>
                          <p className="text-sm font-medium text-gray-500">
                            3.9 MB
                          </p>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center w-8 h-8 ml-4 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <HeartIcon className="w-6 h-6" aria-hidden="true" />
                          <span className="sr-only">Favorite</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Information</h3>
                      <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Uploaded by</dt>
                          <dd className="text-gray-900">Marie Culver</dd>
                        </div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Created</dt>
                          <dd className="text-gray-900">June 8, 2020</dd>
                        </div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Last modified</dt>
                          <dd className="text-gray-900">June 8, 2020</dd>
                        </div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Dimensions</dt>
                          <dd className="text-gray-900">4032 x 3024</dd>
                        </div>
                        <div className="flex justify-between py-3 text-sm font-medium">
                          <dt className="text-gray-500">Resolution</dt>
                          <dd className="text-gray-900">72 x 72</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Description</h3>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm italic text-gray-500">
                          Add a description to this image.
                        </p>
                        <button
                          type="button"
                          className="flex items-center justify-center w-8 h-8 -mr-2 text-gray-400 bg-white rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <PencilIcon className="w-5 h-5" aria-hidden="true" />
                          <span className="sr-only">Add description</span>
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Shared with</h3>
                      <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                        <li className="flex items-center justify-between py-3">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80"
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="ml-4 text-sm font-medium text-gray-900">
                              Aimee Douglas
                            </p>
                          </div>
                          <button
                            type="button"
                            className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Remove
                            <span className="sr-only"> Aimee Douglas</span>
                          </button>
                        </li>
                        <li className="flex items-center justify-between py-3">
                          <div className="flex items-center">
                            <img
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                            <p className="ml-4 text-sm font-medium text-gray-900">
                              Andrea McMillan
                            </p>
                          </div>
                          <button
                            type="button"
                            className="ml-6 text-sm font-medium text-indigo-600 bg-white rounded-md hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Remove
                            <span className="sr-only"> Andrea McMillan</span>
                          </button>
                        </li>
                        <li className="flex items-center justify-between py-2">
                          <button
                            type="button"
                            className="flex items-center p-1 -ml-1 bg-white rounded-md group focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <span className="flex items-center justify-center w-8 h-8 text-gray-400 border-2 border-gray-300 border-dashed rounded-full">
                              <PlusIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500">
                              Share
                            </span>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="flex">
                      <button
                        type="button"
                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Download
                      </button>
                      <button
                        type="button"
                        className="flex-1 px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
        <div>asd</div>
      </Dialog>
    </Transition.Root>
  );
}
