import { RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import TweetBox from "./TweetBox";
import TweetComponent from "./Tweets";
import { Tweet } from "../typing";
import { fetchTweets } from "../utils/fetchTweets";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

function Feeds({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const UpdateTweets = async () => {
    const Refreshtoast = toast.loading("Refreshing the page");
    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Update the Tweets", {
      id: Refreshtoast,
    });
  };

  console.log("feeds tweets", tweets);

  return (
    <div className="col-span-8 lg:col-span-5 border-x max-h-screen overflow-y-scroll scrollbar-hide pb-3">
      <Toaster position="top-center" reverseOrder={false} />
      {/* top bar */}
      <div className="flex items-center justify-between select-none">
        <h4 className="p-5 pb-0 text-xl font-bold capitalize text-[#0f1419]">
          home
        </h4>
        <RefreshIcon
          className="mr-5 mt-5 w-8 h-8 cursor-pointer transition-all duration-500 ease-out text-twitterColor hover:rotate-180 active:scale-125 outline-none select-none"
          onClick={UpdateTweets}
        />
      </div>

      {/* Tweet box */}
      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      {/* tweets */}
      <div>
        {tweets.map((tweet) => {
          return <TweetComponent key={tweet._id} tweet={tweet} />;
        })}
      </div>
    </div>
  );
}

export default Feeds;
