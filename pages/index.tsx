import type { NextPage } from "next";
import Head from "next/head";
import Feeds from "../components/Feeds";
import Sidebar from "../components/Sidebar";
import Weigtes from "../components/Weigtes";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <link
          rel="icon"
          href="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
        />
      </Head>

      <main className="grid grid-cols-9">
        <Sidebar />
        <Feeds />
        <Weigtes />
      </main>
    </>
  );
};

export default Home;
