import { CheckCircleIcon } from "@heroicons/react/solid";

const Contest = ({ contest }) => {
  return (
    <ul className="grid grid-cols-1">
      <div className="pb-16 mt-12 bg-white sm:mt-12 lg:mt-8 sm:pb-20">
        <div className="relative">
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
              <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Current Contest
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  {contest.description}
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
                      Prizes
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="w-5 h-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        First place:{" "}
                        <span className="font-bold ">
                          {contest.firstPrize} NEAR
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="w-5 h-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        Second place:{" "}
                        <span className="font-bold ">
                          {contest.secondPrize} NEAR
                        </span>
                      </p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon
                          className="w-5 h-5 text-green-400"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="ml-3 text-sm text-gray-700">
                        Third place:{" "}
                        <span className="font-bold ">
                          {contest.thirdPrize} NEAR
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 py-8 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg font-medium leading-6 text-gray-900">
                  Total contest pool
                </p>
                <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900">
                  <span>
                    {contest.firstPrize +
                      contest.secondPrize +
                      contest.thirdPrize}
                  </span>
                  <span className="ml-3 text-xl font-medium text-gray-500">
                    NEAR
                  </span>
                </div>
                <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline">
                    Learn about participation rules
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900"
                    >
                      Join Contest
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ul>
  );
};

export default Contest;
