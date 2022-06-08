import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { TweetBody } from "../typing";
import { fetchTweets } from "../utils/fetchTweets";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  setTweets: any;
}

function TweetBox({ setTweets }: Props) {
  const [userInput, setUserInput] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isAddImgOpen, setisAddImgOpen] = useState<boolean>(false);
  const { data: session } = useSession();

  const AddTheImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!imageInputRef?.current?.value) return;

    setImage(imageInputRef?.current?.value);
    imageInputRef.current.value = "";
  };

  const ADD_TWEET = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const tweetBody: TweetBody = {
      text: userInput,
      username: session?.user?.name || "unKnown User",
      profileImg:
        session?.user?.image ||
        "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      image: image,
    };

    const Refreshtoast = toast.loading("Uploading the tweet");
    let f = await fetch(
      `${process.env.NEXT_PUBLIC_HOSTING_URL}/api/addTweets`,
      {
        body: JSON.stringify(tweetBody),
        method: "POST",
      }
    );

    let res = await f.json();

    if (res.success) {
      const tweets = await fetchTweets();
      setTweets(tweets);

      toast.success(res.message, {
        id: Refreshtoast,
      });

      setImage("");
      setUserInput("");
      setisAddImgOpen(false);
    } else {
      toast.error("some things is wrong please try again");
    }
  };

  return (
    <div className="flex space-x-4 px-2 mt-4 border-b pb-4">
      <Toaster position="top-center" reverseOrder={false} />

      <img
        src={
          session?.user?.image ||
          "https://cdn-icons-png.flaticon.com/512/847/847969.png"
        }
        alt="user profile"
        className="w-12 h-12 rounded-full object-cover cursor-pointer select-none"
      />

      <div className="flex flex-col flex-1">
        <form className="flex-1 flex flex-col" method="POST">
          <input
            type="text"
            placeholder={`What's happening ${session?.user?.name}?`}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="h-14 outline-none text-[#0f1419] text-xl placeholder:text-xl"
          />
          <div className="flex items-center justify-between select-none">
            <div className="flex items-center space-x-2">
              <PhotographIcon
                className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]"
                onClick={() => setisAddImgOpen(!isAddImgOpen)}
              />
              <SearchCircleIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <EmojiHappyIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <CalendarIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
              <LocationMarkerIcon className="w-6 h-6 cursor-pointer text-twitterColor hover:scale-125 transition-all duration-150 ease-out  hover:bg-blue-200 rounded-full hover:p-[3px]" />
            </div>

            <button
              type="submit"
              disabled={!userInput}
              className={`bg-twitterBg_1 text-white px-5 py-[6px] text-lg capitalize font-medium rounded-full mr-2 transition-all duration-400 ease-in ${
                !userInput && "opacity-40"
              }`}
              onClick={ADD_TWEET}
            >
              tweet
            </button>
          </div>
          {isAddImgOpen && (
            <div className="flex flex-col">
              <form className="mt-4 flex items-center flex-1 space-x-4">
                <input
                  ref={imageInputRef}
                  type="text"
                  placeholder="Enter The Image Url"
                  className="px-2 py-2 bg-slate-100 border outline-none rounded-md flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-twitterBg_1 text-white text-base font-bold rounded-full hover:opacity-70 transition-all duration-100 ease-in"
                  onClick={AddTheImage}
                >
                  Add Image
                </button>
              </form>

              {image && (
                <img
                  src={image}
                  alt="image"
                  className="mt-3 w-[90%] h-[90%] object-contain mx-auto shadow-md rounded-lg"
                />
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
