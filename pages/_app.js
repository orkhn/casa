import "styles/globals.css";

import Layout from "components/layout/Layout";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="images/favicon.png" />
        <meta
          property="og:title"
          content="Casa - Culinary Arts Center of Azerbaijan"
        />
        <meta
          property="og:description"
          content="Culinary Arts Center of Azerbaijan (CÀSÀ) is an accredited tertiary education Institution that provides high quality programmes which offering the international standards and professional qualification for culinary education."
        />
        <meta property="og:url" content="" />
      </Head>
      <Layout style={{ width: "100%", height: "100%" }}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
