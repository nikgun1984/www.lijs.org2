import Head from "next/head";
import { SEO } from "../components/seo";
import { tw } from "twind";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <SEO />
      <p className={tw`text-red-400`}>Hello LIJS!</p>
    </Layout>
  );
}
