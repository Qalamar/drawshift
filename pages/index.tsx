import Icon from 'components/common/Icon'
import { TextLoop } from 'react-text-loop-next'
import clsx from 'clsx'
import Head from 'next/head'
import { useRouter } from 'next/router'

const features = [
  {
    icon: 'NewspaperIcon',
    text: 'Drafts',
    color: 'red',
  },
  {
    icon: 'TemplateIcon',
    text: 'Boards',
    color: 'green',
  },
  {
    icon: 'ChartPieIcon',
    text: 'Graphs',
    color: 'pink',
  },
]

export default function Dashboard() {
  const router = useRouter()

  const handleNavigationClick = () => {
    router.push('/board')
  }

  return (
    <>
      <Head>
        <title>Drawshift</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="bg-[#111827] font-monst h-screen !overflow-hidden">
        <div className="relative pt-32 pb-96 lg:pt-40">
          <div>
            <img
              className="absolute bottom-0 left-1/2 w-[1440px] max-w-none -translate-x-1/2"
              src="https://tailwindui.com/img/component-images/grid-blur-purple-on-black.jpg"
              alt=""
            />
          </div>
          <div className="relative px-6 mx-auto text-center max-w-7xl lg:px-8">
            <div className="max-w-2xl mx-auto lg:max-w-4xl">
              <div className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
                <span className="hidden sm:inline">Create </span>
                <TextLoop
                  springConfig={{ stiffness: 180, damping: 16 }}
                  mask={true}
                  className="-mt-0.5 text-left"
                  interval={3000}
                >
                  {features.map(feature => (
                    <div
                      className={clsx(
                        'flex flex-row items-center font-bold',
                        feature.color === 'red'
                          ? 'text-red-400'
                          : feature.color === 'green'
                          ? 'text-green-400'
                          : 'text-pink-400',
                      )}
                      key={`${feature.text}`}
                    >
                      <Icon icon={feature.icon} />
                      {feature.text}
                    </div>
                  ))}
                </TextLoop>{' '}
                <span className="sm:hidden">
                  <br />
                </span>
                on the go
              </div>
              <p className="mt-1 text-sm leading-8 text-md text-white/60">
                All the processing is done client-side and your data stay on
                your device
              </p>
              <div className="flex flex-row justify-center mt-4 space-x-1">
                <button
                  onClick={() => handleNavigationClick()}
                  type="button"
                  className="inline-flex items-center px-4 py-2.5 text-sm font-semibold text-white rounded-md shadow-sm !bg-indigo-600 hover:!bg-indigo-600/75 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Get Started
                </button>
                <a
                  href="https://github.com/Qalamar/drawshift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2.5 underline text-sm font-semibold text-gray-500 hover:text-gray-300 rounded-md shadow-sm transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flow-root bg-white">
          <div className="relative -mt-80">
            <div className="relative z-10 mx-auto max-w-7xl lg:px-8">
              <img
                src="/drawshift.gif"
                className="max-w-md mx-auto border border-gray-300 rounded-lg shadow-sm lg:max-w-2xl"
              ></img>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
