import React from "react";
import { FaEye, FaShareAlt, FaEllipsisH } from "react-icons/fa";

const PostCard2 = () => {
  return (
    <div className="max-w-[692px] w-full border border-gray-300 rounded-md shadow-md bg-white overflow-hidden mx-auto">
      
      {/* ✅ Post Image */}
      <img
        src="src\Vite + React_files\car-kZ9O3U5Q.jpg"
        alt="Post Cover"
        className="w-full h-[200px] md:h-[250px] object-cover"
      />

      {/* ✅ Post Content */}
      <div className="p-4 md:p-5">
        
        {/* 🏷️ Post Category */}
        <div className="text-gray-600 text-sm md:text-base font-medium flex items-center">
          <span className="mr-2 text-lg">📅</span>
          <span>Meetup</span>
        </div>

        {/* 📰 Post Title */}
        <h2 className="text-lg md:text-xl font-bold mt-2 leading-tight">
          Finance & Investment Elite Social Mixer @Lujiazui
        </h2>

        {/* 📆 Event Details */}
        <div className="text-gray-600 text-sm flex flex-col md:flex-row md:items-center mt-2">
          <span className="flex items-center mr-3">📅 Fri, 12 Oct, 2018</span>
          <span className="flex items-center mt-1 md:mt-0">📍 Ahmedabad, India</span>
        </div>

        {/* 🌐 Visit Button */}
        <button className="w-full bg-orange-500 text-white text-center py-2 mt-3 rounded-md hover:bg-orange-600 transition">
          Visit Website
        </button>

        {/* 👤 Author & 📊 Views Section */}
        <div className="flex flex-wrap justify-between items-center mt-4">
          
          {/* 🧑‍💼 Author Info */}
          <div className="flex items-center space-x-2">
            <img
              src="src\Vite + React_files\c3ac7682e52df2e10d0a36ec3f243a44-6fhMyk-S.jpg"
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-800 font-medium text-sm md:text-base">
              Ronal Jones
            </span>
          </div>

          {/* 📊 Views, Share & Menu */}
          <div className="flex items-center space-x-2 md:space-x-4 text-gray-600 mt-3 md:mt-0">
            <div className="flex items-center text-sm md:text-base">
              <FaEye className="mr-1" />
              <span>1.4k views</span>
            </div>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <FaShareAlt />
            </button>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <FaEllipsisH />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PostCard2;
