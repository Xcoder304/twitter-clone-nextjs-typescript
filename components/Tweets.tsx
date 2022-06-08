import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../typing";
import TimeAgo from "react-timeago";
import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComments } from "../utils/fetchComments";

interface Props {
  tweet: Tweet;
}

function Tweets({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [openComments, setOpenComments] = useState<boolean>(false);

  const getComments = async () => {
    let comments: Comment[] = await fetchComments(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="flex space-x-3 flex-col p-5 pb-2 border-y border-gray-200">
      <div className="flex space-x-3">
        <img
          src={tweet?.profileImg}
          alt="userProfile"
          className="w-12 h-12 object-cover rounded-full select-none shadow-md cursor-pointer  hover:border-4 hover:border-twitterColor transition-all duration-100 ease-in"
        />
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 font-medium text-lg">
              {tweet?.username}
            </span>
            <p className="text-twitterColor cursor-pointer text-base hover:underline">
              @{tweet?.username.split(" ").join("").toLowerCase()}
              <span className="select-none">.</span>
            </p>

            <TimeAgo
              date={tweet?._createdAt}
              className="text-sm text-gray-500 ml-3 select-none pointer-events-none"
            />
          </div>

          <p className="text-gray-800 text-base font-normal mt-1">
            {tweet?.text}
          </p>

          {tweet?.image && (
            <img
              src={tweet?.image}
              alt="image"
              className="m-3 ml-0 mb-1 shadow-lg rounded-lg max-h-72 object-cover"
            />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mt-5 px-8">
        <div className="flex items-center space-x-1">
          <div
            className="flex items-center justify-center cursor-pointer text-gray-400 select-none w-9 h-9 rounded-full hover:bg-[#E1EEF6] hover:text-[#1d9bf0] transition-all duration-150 ease-out"
            onClick={() => setOpenComments(!openComments)}
          >
            <ChatAlt2Icon className="w-5 h-5" />
          </div>
          <p className="text-gray-400">{comments.length}</p>
        </div>

        <div className="flex items-center space-x-1">
          <div className="flex items-center justify-center cursor-pointer text-gray-400 select-none w-9 h-9 rounded-full hover:bg-[#DEF1EB] hover:text-[#00ba7c] transition-all duration-150 ease-out">
            <SwitchHorizontalIcon className="w-5 h-5" />
          </div>
          <p className="text-gray-400">5</p>
        </div>

        <div className="flex items-center space-x-1">
          <div className="flex items-center justify-center cursor-pointer text-gray-400 select-none w-9 h-9 rounded-full hover:bg-[#F7E0EB] hover:text-[#f91880] transition-all duration-150 ease-out">
            <HeartIcon className="w-5 h-5" />
          </div>

          <p className="text-gray-400">5</p>
        </div>

        <div className="flex items-center space-x-1">
          <div className="flex items-center justify-center cursor-pointer text-gray-400 select-none w-9 h-9 rounded-full hover:bg-[#E1EEF6] hover:text-[#1d9bf0] transition-all duration-150 ease-out">
            <UploadIcon className="w-5 h-5" />
          </div>

          <p className="text-gray-400">5</p>
        </div>
      </div>

      {/* comments */}
      {openComments &&
        (comments.length == 0 ? (
          <div className="px-7">
            <h3 className="mt-2 text-xl text-gray-800 font-bold block p-2 select-none">
              {"   "} No Comments in this Tweet{" "}
            </h3>
          </div>
        ) : (
          <div className="my-2 mt-5  max-h-44 overflow-y-scroll p-6">
            {comments.length > 0 &&
              comments.map((comments) => {
                return (
                  <div
                    key={comments._id}
                    className="flex flex-col space-x-11 mt-2"
                  >
                    <div className="relative flex space-x-2">
                      <hr className="absolute left-6 top-7 z-10 h-10 border-x border-gray-300" />
                      <img
                        src={comments?.profileImg}
                        alt="user image"
                        className="w-9 h-9 object-cover rounded-full select-none shadow-md cursor-pointer  hover:border-4 hover:border-twitterColor transition-all duration-100 ease-in z-20"
                      />

                      <div className="flex items-center space-x-2">
                        <span className="text-gray-700 font-medium text-base">
                          {comments?.username}
                        </span>
                        <p className="text-twitterColor cursor-pointer text-sm hover:underline">
                          @
                          {comments?.username.split(" ").join("").toLowerCase()}
                          <span className="select-none">.</span>
                        </p>

                        <TimeAgo
                          date={comments?._createdAt}
                          className="text-sm text-gray-500 ml-3 select-none pointer-events-none"
                        />
                      </div>
                    </div>

                    <p className="text-gray-800 text-base font-normal ">
                      {comments?.comment}
                    </p>
                  </div>
                );
              })}
          </div>
        ))}
    </div>
  );
}

export default Tweets;
