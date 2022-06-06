import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import React from "react";

function TweetBox() {
  return (
    <div className="flex space-x-4 px-2 mt-4 border-b pb-4">
      <img
        src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
        alt="user profile"
        className="w-12 h-12 rounded-full object-cover cursor-pointer"
      />

      <div className="flex flex-col flex-1">
        <form className="flex-1 flex flex-col">
          <input
            type="text"
            placeholder="What's happening?"
            className="h-14 outline-none text-[#0f1419] text-xl placeholder:text-xl"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <PhotographIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-150 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <SearchCircleIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <EmojiHappyIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <CalendarIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <LocationMarkerIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
            </div>

            <button className="bg-twitterBg_1 text-white px-5 py-[6px] text-lg capitalize font-medium rounded-full mr-2">
              tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
