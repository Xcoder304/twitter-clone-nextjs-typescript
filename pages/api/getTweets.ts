import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../typing";
import { sanityClient } from "../../lib/sanity";
import { groq } from "next-sanity";

const feedQuery = groq`
*[_type == "tweet" && !blockTweet] {
    ...
  } | order(_createdAt desc)
`;

type Data = {
  tweets: Tweet[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  res.status(200).json({ tweets });
}
