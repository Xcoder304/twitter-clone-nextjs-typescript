import { Tweet } from "../typing";
export const fetchTweets = async () => {
  let f = await fetch(`${process.env.HOSTING_URL}/api/getTweets`);
  let res = await f.json();
  let tweets: Tweet[] = res.tweets;
  return tweets;
};
