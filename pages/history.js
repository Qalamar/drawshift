import HistoryList from "../components/HistoryList";
import Navbar from "../components/Navbar";
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

export default function History() {
  return (
    <div>
      <div className="pb-32 bg-gray-800">
        <Navbar />
      </div>

      <main className="-mt-24">
        <div className="px-4 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-5 py-6 bg-white rounded-lg shadow-md sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 font-monst">
                Previous winners
              </h2>
            </div>
            <HistoryList data={people} />
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
}
