/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, useAnimation } from "framer-motion";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Main from "../assets/images/drawshift.gif";
import Feature from "../assets/images/features.png";
import { auth } from "../store/Store";

const Home = observer(() => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const controls = useAnimation();

  const transition = async () => {
    if (auth.isRegistred) {
      await controls.start({
        opacity: [1, 0],
        y: [0, -100],
      });
      history.push("/lobby");
    }
  };

  return (
    <motion.div animate={controls}>
      <div className="bg-white">
        <main>
          <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-20">
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                      Thought organizing for messy minds
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Create boards, drafts, flow charts and save them all in
                      one place. Accessible from anywhere.
                    </p>
                  </div>
                  <form
                    action="#"
                    className="mt-12 sm:max-w-lg sm:w-full sm:flex"
                  >
                    <div className="flex-1 min-w-0">
                      <label htmlFor="hero_email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="hero_email"
                        type="email"
                        className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10"
                      >
                        Get started
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                  <svg
                    className="absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                    src={Main}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
              <div className="relative sm:py-16 lg:py-0">
                <div
                  aria-hidden="true"
                  className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
                >
                  <div className="absolute inset-y-0 w-full right-1/2 bg-gray-50 rounded-r-3xl lg:right-72"></div>
                  <svg
                    className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                    width="404"
                    height="392"
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="404"
                      height="392"
                      fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                    />
                  </svg>
                </div>
                <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                  <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={Feature}
                      alt=""
                    />
                    <div
                      className="absolute inset-0 bg-rose-500"
                      style={{ mixBlendMode: "multiply" }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div>
                    <div className="relative px-8">
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <p className="relative">
                            Save time by creating rough drafts on-the-go and
                            transforming them into fully-fledged charts later
                            on.
                          </p>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    On a mission to simplify drafting
                  </h2>
                  <div className="mt-6 space-y-6 text-gray-500">
                    <p className="text-lg">
                      Drawshift makes the concept of saving ideas more appealing
                      by gamifying the repetitive aspects. Instead of letting
                      your notes wander off your mind, you can save them
                      effortlessly and sync them across all your devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="pt-24">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Frequently asked questions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Can’t find the answer you’re looking for? Reach out to our{" "}
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    support
                  </a>
                  .
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  <div>
                    <dt className="text-lg font-semibold leading-6 text-gray-900">
                      Where is my data being stored?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      All user data is encrypted and only accessible to you.
                      <br></br>
                      Alternatively, you can choose to disable syncing and save
                      your data locally.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-semibold leading-6 text-gray-900">
                      What's coming next to Drawshift?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We are constantly adding new features and will make
                      announcements when changes are made.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-semibold leading-6 text-gray-900">
                      What are the available licensing options?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      All the current Drawshift features are free of charge and
                      will always be. However, additional paid features can be
                      introduced in the future.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-semibold leading-6 text-gray-900">
                      Can I export my data?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Yes, exporting data is possible. For more details please
                      follow this{" "}
                      <a href="#" className="font-medium text-rose-500">
                        guide
                      </a>
                      .
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-lg shadow-xl bg-rose-500">
            <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-rose-200">
                  Create your account and follow the{" "}
                  <span className="font-semibold">"Getting Started"</span> guide
                  to explore all what Drawshift has to offer.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 mt-8 text-base font-medium bg-white border border-transparent rounded-md shadow text-rose-600 hover:bg-rose-50"
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Info</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Mail</span>
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-base text-center text-gray-400">
                Created by Tariq Hamrit.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </motion.div>
  );
});

export default Home;
