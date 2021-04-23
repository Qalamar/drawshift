import { useRecoilState } from "recoil";
import Navbar from "./Navbar";
import Phases from "./Phases";
import PixelDraw from "./PixelDraw";
import PixelList from "./PixelList";
import PixelWinner from "./PixelWinner";
import { phaseState } from "../utils/store";
import { Transition } from "@headlessui/react";

const people = [
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  {
    name: "Rocket Pixel",
    owner: "pixelparty",
    tag: "Tag",
    imageUrl:
      "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
  },
  // More people...
];

const winner = {
  name: "Rocket Pixel",
  owner: "pixelparty",
  tag: "Tag",
  imageUrl:
    "http://artist.com/art-recognition-and-education/wp-content/themes/artist-blog/media-files/2016/05/pixel-5.jpg",
};
export default function Battle() {
  const [Phase, setPhase] = useRecoilState(phaseState);
  return (

    <div className="px-5 py-6 bg-white rounded-lg shadow-md sm:px-6">
      <Phases />

      <Transition
        show={Phase === 1}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PixelDraw />
      </Transition>
      <Transition
        show={Phase === 2}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PixelList data={people} />
      </Transition>
      <Transition
        show={Phase === 3}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <PixelWinner data={winner} />
      </Transition>
    </div>
  );
}
