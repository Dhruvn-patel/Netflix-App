import React from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video pt-52 px-4 absolute bg-gradient-to-r from-black">
      <h1 className="py-2 text-4xl font-bold px-4 text-white w-11/12">
        {title}
      </h1>
      <p className="text-lg  w-1/3 px-4 text-white">{overview}</p>
      <div className="flex gap-2 mt-4">
        <button
          className="bg-slate-100 px-10 p-3 rounded-md font-semibold
        hover:bg-opacity-90
        "
        >
          <span className="flex gap-2 items-center ">
            <FaPlay />
            Play
          </span>
        </button>
        <button
          className="bg-gray-300 px-10 p-3 rounded-md font-semibold
        hover:bg-opacity-80
        "
        >
          <span className="flex gap-2 items-center ">
            <FiInfo />
            More Info
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
