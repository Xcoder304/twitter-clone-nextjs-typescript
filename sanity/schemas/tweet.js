export default {
  name: "tweet",
  title: "Tweet",
  type: "document",
  fields: [
    {
      name: "text",
      title: "text in tweet",
      type: "string",
    },
    {
      name: "blockTweet",
      title: "BlockTweet",
      description: "Toggle if your disable the",
      type: "boolean",
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "string",
    },
  ],
};
