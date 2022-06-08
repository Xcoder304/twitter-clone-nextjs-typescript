import type { NextApiRequest, NextApiResponse } from "next";
import { CommentBody } from "../../typing";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data: CommentBody = JSON.parse(req.body);

  let mutations = {
    mutations: [
      {
        create: {
          _type: "comment",
          comment: data.comment,
          username: data.username,
          profileImg: data.profileImg,
          tweet: {
            _type: "reference",
            _ref: data.tweetId,
          },
        },
      },
    ],
  };

  const apiEndPoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

  let result = await fetch(apiEndPoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  let json = await result.json();

  res.status(200).json({ success: true, message: "Done" });
}
