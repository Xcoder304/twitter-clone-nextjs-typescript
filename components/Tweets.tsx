import React from "react";
import { Tweet } from "../typing";

interface Props {
  tweet: Tweet;
}

function Tweets({ tweet }: Props) {
  console.log(tweet);
  return <div>Tweet</div>;
}

export default Tweets;
