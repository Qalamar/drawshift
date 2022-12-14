import { HomeIcon, ReplyIcon, TrashIcon } from '@heroicons/react/solid'
import CanvasDraw from '@win11react/react-canvas-draw'
import { Main } from 'components/styled/board.styled'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import RangeSlider from 'react-bootstrap-range-slider'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'

let saveableCanvas: {
  clear: () => void
  getSaveData: () => string
  undo: () => void
}

const Board = () => {
  const [brushRadius, setbrushRadius] = useState(3)
  const router = useRouter()

  const handleNavigationClick = () => {
    router.push('/')
  }

  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-gray-900 font-monst">
      <Head>
        <title>Drawshift | Editor</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="absolute w-full h-full -translate-x-1/2 board-bg left-1/2 max-w-none" />

      <div className="flex items-center h-full">
        <Main>
          <div className="flex flex-col items-center justify-between mx-auto mt-2 md:flex-row">
            <div className="flex flex-row items-center justify-center h-auto px-5 py-1.5 space-x-6 shadow-lg bg-secondary rounded-xl">
              <RangeSlider
                value={brushRadius}
                min={2}
                max={16}
                onChange={(changeEvent: any) =>
                  setbrushRadius(changeEvent.target.value)
                }
              />
            </div>
            <div className="flex mt-5 lg:mt-0 lg:ml-4">
              <span className="">
                <button
                  onClick={() => handleNavigationClick()}
                  type="button"
                  className="flex items-center px-4 py-2.5 text-sm font-medium text-white transition duration-200 rounded-md shadow-sm !bg-secondary hover:!bg-secondary/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <HomeIcon className="w-5 h-5 text-white" aria-hidden="true" />
                </button>
              </span>

              <span className="ml-3">
                <button
                  onClick={() => saveableCanvas.undo()}
                  type="button"
                  className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white transition duration-200 rounded-md shadow-sm !bg-secondary hover:!bg-secondary/75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ReplyIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </button>
              </span>

              <span className="ml-3">
                <button
                  onClick={() => saveableCanvas.clear()}
                  type="button"
                  className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white rounded-md shadow-sm !bg-secondary hover:!bg-secondary/75 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <TrashIcon
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </button>
              </span>
            </div>
          </div>
          <div className="h-auto mx-auto mt-8 bg-white rounded-lg shadow-lg">
            <CanvasDraw
              brushColor="#0e0e0e0"
              brushRadius={brushRadius}
              canvasWidth="auto"
              canvasHeight={450}
              lazyRadius={0}
              ref={(canvasDraw: any) => (saveableCanvas = canvasDraw)}
            />
          </div>
          <div className="flex flex-col justify-center mx-auto mt-8 md:flex-row"></div>
        </Main>
      </div>
    </div>
  )
}

export default Board
