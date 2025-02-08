import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";

const PostCard = () => {
  console.log("PostCard Loaded"); // Debugging Check

  return (
    <>
    <div className="max-w-[692px] w-full border border-gray-300 rounded-md shadow-md p-4 bg-white mx-auto">
      
      {/* ✅ Post Image */}
      <img
        src="src\Vite + React_files\nature-rDsfVg8l.jpg"
        alt="Post Cover"
        className="w-full h-[200px] md:h-[250px] object-cover rounded-md"
      />

      {/* ✅ Post Content */}
      <div className="p-3">
        
        {/* 🏷️ Post Category */}
        <div className="flex items-center text-lg font-semibold">
          <span className="text-2xl mr-2">📝</span>
          <span className="text-lg md:text-xl">Article</span>
        </div>

        {/* 📰 Post Title */}
        <h2 className="text-lg md:text-xl font-bold mt-2 leading-tight">
          What if famous brands had regular fonts? Meet RegulaBrands!
        </h2>

        {/* 📜 Post Description */}
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          I’ve worked in UX for the better part of a decade. From now on, I plan to rein...
        </p>

        {/* 👤 Author & 📊 Views Section */}
        <div className="flex flex-wrap justify-between items-center mt-4">
          
          {/* 🧑‍💼 Author Info */}
          <div className="flex items-center space-x-2">
            <img
              src="src\Vite + React_files\siddrath-t0piMZRc.jpg"
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-gray-800 font-medium text-sm md:text-base">
              Siddharth Goyal
            </span>
          </div>

          {/* 📊 Views & Share Button */}
          <div className="flex items-center space-x-2 md:space-x-4 text-gray-600 mt-3 md:mt-0">
            <div className="flex items-center text-sm md:text-base">
              <FaEye className="mr-1" />
              <span>1.4k views</span>
            </div>
            <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <FaShareAlt />
            </button>
          </div>

        </div>
      </div>
    </div>
     <div className="max-w-[692px] w-full border border-gray-300 rounded-md shadow-md p-4 bg-white mx-auto">
      
     {/* ✅ Post Image */}
     <img
       src="src\Vite + React_files\wood-SIbopgrg.jpg"
       alt="Post Cover"
       className="w-full h-[200px] md:h-[250px] object-cover rounded-md"
     />

     {/* ✅ Post Content */}
     <div className="p-3">
       
       {/* 🏷️ Post Category */}
       <div className="flex items-center text-lg font-semibold">
         <span className="text-2xl mr-2">📝</span>
         <span className="text-lg md:text-xl">Article</span>
       </div>

       {/* 📰 Post Title */}
       <h2 className="text-lg md:text-xl font-bold mt-2 leading-tight">
         What if famous brands had regular fonts? Meet RegulaBrands!
       </h2>

       {/* 📜 Post Description */}
       <p className="text-gray-600 mt-2 text-sm md:text-base">
         I’ve worked in UX for the better part of a decade. From now on, I plan to rein...
       </p>

       {/* 👤 Author & 📊 Views Section */}
       <div className="flex flex-wrap justify-between items-center mt-4">
         
         {/* 🧑‍💼 Author Info */}
         <div className="flex items-center space-x-2">
           <img
             src="src\Vite + React_files\15d7211204149d93adda6dfafb5d81f2-08Q1wamp.jpg"
             alt="Author"
             className="w-10 h-10 rounded-full"
           />
           <span className="text-gray-800 font-medium text-sm md:text-base">
             Sarah West
           </span>
         </div>

         {/* 📊 Views & Share Button */}
         <div className="flex items-center space-x-2 md:space-x-4 text-gray-600 mt-3 md:mt-0">
           <div className="flex items-center text-sm md:text-base">
             <FaEye className="mr-1" />
             <span>1.4k views</span>
           </div>
           <button className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
             <FaShareAlt />
           </button>
         </div>

       </div>
     </div>
   </div>  </>
  );
};

export default PostCard;
