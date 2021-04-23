export default function Fee() {
  return (
    <div>
      <label
        htmlFor="company_website"
        className="block text-sm font-medium text-gray-700"
      >
        Prize Bucket
      </label>
      <div className="flex mt-1 rounded-md shadow-sm">
        <input
          type="text"
          className="flex-1 block w-full min-w-0 px-3 py-2 border-gray-300 rounded-none rounded-l-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="100"
        />
        <span className="inline-flex items-center px-3 text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 sm:text-sm">
          NEAR
        </span>
      </div>
    </div>
  );
}
