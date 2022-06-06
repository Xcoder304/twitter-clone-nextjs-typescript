import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import TweetBox from "./TweetBox";

function Feeds() {
  return (
    <div className="col-span-8 lg:col-span-5 border-x">
      {/* top bar */}
      <div className="flex items-center justify-between select-none">
        <h4 className="p-5 pb-0 text-xl font-bold capitalize text-[#0f1419]">
          home
        </h4>
        <RefreshIcon className="mr-5 mt-5 w-8 h-8 cursor-pointer transition-all duration-500 ease-out text-twitterColor hover:rotate-180 active:scale-125 outline-none select-none" />
      </div>

      {/* Tweet box */}
      <div>
        <TweetBox />
      </div>
    </div>
  );
}

export default Feeds;
