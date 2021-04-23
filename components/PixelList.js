import { PlusCircleIcon } from "@heroicons/react/solid";

const PixelList = ({ data }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((person) => (
        <li
          key={person.email}
          className="flex flex-col w-64 col-span-1 text-center bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md"
        >
          <div className="flex flex-col flex-1 mb-4">
            <img
              className="flex-shrink-0 w-64 h-64 mx-auto bg-black rounded-t-lg"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="flex flex-col justify-between flex-grow mt-1">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.owner}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {person.tag}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="flex -mt-px divide-x divide-gray-200">
              <div className="flex flex-1 w-0">
                <div className="relative inline-flex items-center justify-center flex-1 w-0 py-4 -mr-px text-sm font-medium text-gray-700 transition duration-200 border border-transparent rounded-bl-lg cursor-pointer hover:text-gray-500 hover:bg-gray-100">
                  <PlusCircleIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Vote</span>
                </div>
              </div>
              <div className="flex flex-1 w-0 -ml-px">
                <div className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                  <span className="">1245</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PixelList;
