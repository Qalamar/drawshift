/* eslint-disable jsx-a11y/anchor-is-valid */
import { motion, useAnimation } from "framer-motion";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../components/avatar/AvatarCreator";
import Features from "../components/landing/Features";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Video from "../components/landing/Video";
import { auth } from "../store/Store";
import Main from "../assets/images/main.png";
import Feature from "../assets/images/features.png";

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
                <div>
                  <img
                    className="w-auto h-11"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                    alt="Workflow"
                  />
                </div>
                <div className="mt-20">
                  <div>
                    <a href="#" className="inline-flex space-x-4">
                      <span className="rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-500 tracking-wide uppercase">
                        What's new
                      </span>
                      <span className="inline-flex items-center space-x-1 text-sm font-medium text-rose-500">
                        <span>Just shipped version 0.1.0</span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                      Thought organizing tool for messy minds
                    </h1>
                    <p className="mt-6 text-xl text-gray-500">
                      Create boards, drafts and flow charts to save them all in
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
                      <div>
                        <img
                          className="h-12"
                          src="https://tailwindui.com/img/logos/workcation.svg?color=white"
                          alt="Workcation"
                        />
                      </div>
                      <blockquote className="mt-8">
                        <div className="relative text-lg font-medium text-white md:flex-grow">
                          <svg
                            className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-rose-400"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="relative">
                            Tincidunt integer commodo, cursus etiam aliquam
                            neque, et. Consectetur pretium in volutpat, diam.
                            Montes, magna cursus nulla feugiat dignissim id
                            lobortis amet.
                          </p>
                        </div>

                        <footer className="mt-4">
                          <p className="text-base font-semibold text-rose-200">
                            Sarah Williams, CEO at Workcation
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
                <div className="pt-12 sm:pt-16 lg:pt-20">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    On a mission to empower teams
                  </h2>
                  <div className="mt-6 space-y-6 text-gray-500">
                    <p className="text-lg">
                      Sagittis scelerisque nulla cursus in enim consectetur
                      quam. Dictum urna sed consectetur neque tristique
                      pellentesque. Blandit amet, sed aenean erat arcu morbi.
                      Cursus faucibus nunc nisl netus morbi vel porttitor vitae
                      ut. Amet vitae fames senectus vitae.
                    </p>
                    <p className="text-base leading-7">
                      Sollicitudin tristique eros erat odio sed vitae, consequat
                      turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                      Eros eu viverra donec ut volutpat donec laoreet quam urna.
                      Sollicitudin tristique eros erat odio sed vitae, consequat
                      turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                      Eros eu viverra donec ut volutpat donec laoreet quam urna.
                    </p>
                    <p className="text-base leading-7">
                      Rhoncus nisl, libero egestas diam fermentum dui. At quis
                      tincidunt vel ultricies. Vulputate aliquet velit faucibus
                      semper. Pellentesque in venenatis vestibulum consectetur
                      nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
                      Morbi enim fermentum lacus in. Viverra.
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
                    customer support
                  </a>{" "}
                  team.
                </p>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  <div>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      How do you make holy water?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      You boil the hell out of it. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Quas cupiditate laboriosam
                      fugiat.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      What&#039;s the best thing about Switzerland?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      I don&#039;t know, but the flag is a big plus. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Quas
                      cupiditate laboriosam fugiat.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      What do you call someone with no body and no nose?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Nobody knows. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Quas cupiditate laboriosam fugiat.
                    </dd>
                  </div>

                  <div>
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      Why do you never see elephants hiding in trees?
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Because they&#039;re so good at it. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Quas cupiditate
                      laboriosam fugiat.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-24 bg-gray-900 sm:mt-12 lg:mt-32">
          <div className="max-w-md px-4 py-12 mx-auto overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <nav
              className="flex flex-wrap justify-center -mx-5 -my-2"
              aria-label="Footer"
            >
              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  About
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Blog
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Jobs
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Press
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Accessibility
                </a>
              </div>

              <div className="px-5 py-2">
                <a
                  href="#"
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  Partners
                </a>
              </div>
            </nav>

            <p className="mt-8 text-base text-center text-gray-400">
              All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
});

export default Home;
