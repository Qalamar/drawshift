const PixelWinner = ({ data }) => {
  return (
    <div className="flex items-center justify-center p-12">
      <div
        key={data.email}
        className="flex flex-col col-span-1 text-center bg-white border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-md"
      >
        <div className="flex flex-col flex-1 mb-4">
          <img
            className="flex-shrink-0 w-48 h-48 mx-auto bg-black rounded-t-lg"
            src={data.imageUrl}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            {data.name}
          </h3>
          <dl className="flex flex-col justify-between flex-grow mt-1">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{data.owner}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                {data.tag}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="flex -mt-px divide-x divide-gray-200">
            <div className="flex flex-1 w-0 -ml-px">
              <div className="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg hover:text-gray-500">
                <span className="">12452 Votes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelWinner;
