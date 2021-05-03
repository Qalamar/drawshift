export default function Header({ name }) {
  return (
    <header>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-16 lg:py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-100 font-monst sm:text-5xl sm:tracking-tight lg:text-6xl">
            Visualizing ideas is now easy
          </p>
          <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500 font-quick">
            Drawshift is the cross-platfrom app to store your ideas either on a
            canvas or using interactive charts.
          </p>
        </div>
      </div>
    </header>
  );
}
