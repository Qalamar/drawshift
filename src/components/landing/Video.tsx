import React from "react";

const Video = () => {
  return (
    <div className="mx-auto mt-48 lg:max-w-2xl">
      <div className="relative w-full transition-shadow duration-300 hover:shadow-xl ">
        <img
          className="object-cover w-full h-56 rounded-md shadow-lg sm:h-64 md:h-80 lg:h-96 "
          src="https://raw.githubusercontent.com/Qalamar/portfolio-react/master/src/images/icons/quizarena.png?token=AEB5OSGN3QNYTUB3KHFL4NC7YOCAU"
          alt=""
        />
        <a
          href="/"
          aria-label="Play Video"
          className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
        >
          <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
            <svg
              className="w-10 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Video;
