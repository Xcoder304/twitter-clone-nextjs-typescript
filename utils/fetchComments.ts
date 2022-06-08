import { Comment } from "../typing";

export const fetchComments = async (tweetId: string) => {
  let f = await fetch(
    `${process.env.HOSTING_URL}/api/getComments?tweetId=${tweetId}`
  );

  let comments: Comment[] = await f.json();

  return comments;

  // let
};
