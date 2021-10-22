import TextLoop from "react-text-loop";
import {
  CheckCircleIcon,
  NewspaperIcon,
  MinusCircleIcon,
  TemplateIcon,
  ChartPieIcon,
} from "@heroicons/react/solid";
export default function Header() {
  return (
    <header>
      <div className="justify-center px-4 py-16 mx-auto max-w-7xl md:flex md: sm:py-16 lg:py-28 sm:px-6 lg:px-8">
        <div className="">
          <p className="mt-1 text-4xl font-extrabold text-gray-100 font-monst sm:text-5xl sm:tracking-tight lg:text-6xl">
            Make{" "}
            <TextLoop
              springConfig={{ stiffness: 180, damping: 16 }}
              mask={true}
              className="-mt-2 text-left md:-mt-0"
              interval={3000}
            >
              <div className="flex flex-row items-center text-orange-400">
                <NewspaperIcon className="mr-2 w-14 h-14" aria-hidden="true" />
                <div className="">Charts</div>
              </div>
              <div className="flex flex-row items-center text-pink-400">
                <TemplateIcon className="mr-2 w-14 h-14" aria-hidden="true" />
                <div className="">Boards</div>
              </div>
              <div className="flex flex-row items-center text-indigo-400">
                <ChartPieIcon className="mr-2 w-14 h-14" aria-hidden="true" />
                <div className="">Graphs</div>
              </div>
            </TextLoop>{" "}
            on the go
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
