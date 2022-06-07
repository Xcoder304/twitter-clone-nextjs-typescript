import React from "react";
import type { GetServerSideProps } from "next";
import Head from "next/head";
import Feeds from "../components/Feeds";
import Sidebar from "../components/Sidebar";
import Weigtes from "../components/Weigtes";
import { fetchTweets } from "../utils/fetchTweets";
import { Tweet } from "../typing";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  return (
    <div className="lg:max-w-6xl mx-auto h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link
          rel="icon"
          href="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        />
      </Head>

      <main className="grid grid-cols-10">
        <Sidebar />
        <Feeds tweets={tweets} />
        <Weigtes />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let tweets = await fetchTweets();
  console.log(tweets);

  return {
    props: { tweets },
  };
};
