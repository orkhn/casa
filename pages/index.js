import Head from "next/head";
import Hero from "components/home/hero/Hero";
import Subscribe from "components/home/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Casa - Culinary Arts Center of Azerbaijan</title>
      </Head>
      <Hero />
      <Subscribe />
    </>
  );
}
