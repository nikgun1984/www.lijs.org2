import Head from "next/head";
import { SEO } from "../components/seo";
import { tw } from "twind";
import { Layout } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Link href="/about">
        <a>About</a>
      </Link>
      <SEO />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={tw`text-red-400`}>Hello LIJS!</p>
    </Layout>
  );
}
