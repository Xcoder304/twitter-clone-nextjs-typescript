import type { NextApiRequest, NextApiResponse } from "next";
import { TweetBody } from "../../typing";

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let data: TweetBody = JSON.parse(req.body);

  const mutations = {
    mutations: [
      {
        create: {
          _type: "tweet",
          text: data.text,
          username: data.username,
          profileImg: data.profileImg,
          blockTweet: false,
          image: data.image,
        },
      },
    ],
  };

  const apiEndPoint = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.SANITY_DATASET}`;

  let result = await fetch(apiEndPoint, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: "POST",
  });

  let json = await result.json();

  res.status(200).json({ success: true, message: "Tweet Uploaded" });
}
