import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Weigtes() {
  return (
    <div className="mt-3 px-3 col-span-2 hidden lg:inline">
      <div className="flex items-center bg-gray-100 rounded-full p-3 space-x-2">
        <SearchIcon className="w-6 h-6 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent flex-1 outline-none"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="HUNNTER09"
        options={{ height: 1000 }}
      />
    </div>
  );
}

export default Weigtes;
