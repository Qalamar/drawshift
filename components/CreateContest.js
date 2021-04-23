import DurationDropdown from "./DurationDropdown";
import { CheckIcon } from "@heroicons/react/solid";
import Fee from "./Fee";

const steps = [
  {
    name: "Description",
    description: "Put your contest theme any details here.",
    href: "#",
    status: "complete",
  },
  {
    name: "Duration",
    description: "Choose how long should the contest run for.",
    href: "#",
    status: "current",
  },
  {
    name: "Prize Pool",
    description:
      "Specify the rewards, the NEAR prize pool will be shared between the top 3 voted winners split 50%, 30%, 20%.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Drawing Phase",
    description: "Participants join the contest and work on their submission.",
    href: "#",
    status: "upcoming",
  },
  {
    name: "Voting Phase",
    description: "Submissions completed, community votes are cast.",
    href: "#",
    status: "upcoming",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CreateContest() {
  return (
    <div className="sm:mx-auto sm:w-full font-monst">
      <div className="grid items-center w-full h-full grid-cols-2">
        <div className="order-last col-span-2 mt-16 md:mt-0 md:order-first sm:mx-auto md:col-span-1 sm:w-full sm:max-w-md font-quick">
          <div className="px-4 py-8 bg-white border border-gray-300 shadow-lg sm:rounded-lg sm:px-10">
            <h2 className="my-6 text-3xl font-extrabold text-gray-900 font-monst">
              Create a contest
            </h2>
            <form className="space-y-4" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="name"
                    placeholder="Type details here"
                    maxLength="100"
                    name="name"
                    required
                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <DurationDropdown />
              </div>
              <div>
                <Fee />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
        <nav
          className="order-first col-span-2 mt-16 md:order-last md:mt-0 md:col-span-1"
          aria-label="Progress"
        >
          <ol className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(
                  stepIdx !== steps.length - 1 ? "pb-10" : "",
                  "relative"
                )}
              >
                {step.status === "complete" ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="relative flex items-start group"
                    >
                      <span className="flex items-center h-9">
                        <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                          <CheckIcon
                            className="w-5 h-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                      <span className="flex flex-col min-w-0 ml-4">
                        <span className="text-xs font-semibold tracking-wide uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                ) : step.status === "current" ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="relative flex items-start group"
                      aria-current="step"
                    >
                      <span
                        className="flex items-center h-9"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full">
                          <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" />
                        </span>
                      </span>
                      <span className="flex flex-col min-w-0 ml-4">
                        <span className="text-xs font-semibold tracking-wide text-indigo-600 uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <a
                      href={step.href}
                      className="relative flex items-start group"
                    >
                      <span
                        className="flex items-center h-9"
                        aria-hidden="true"
                      >
                        <span className="relative z-10 flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="flex flex-col min-w-0 ml-4">
                        <span className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {step.description}
                        </span>
                      </span>
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
