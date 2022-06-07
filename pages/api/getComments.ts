import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "../../typing";
import { sanityClient } from "../../lib/sanity";
import { groq } from "next-sanity";

const commentQuery = groq`
*[_type == "comment" && references(*[_type == "tweet" && _id == $tweetId]._id)] {
    ...
  } | order(_createdAt desc)
    
`;

type Data = Comment[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { tweetId } = req.query;
  let comments: Comment[] = await sanityClient.fetch(commentQuery, {
    tweetId: tweetId,
  });
  res.status(200).json(comments);
}
