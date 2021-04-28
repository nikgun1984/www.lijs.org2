import * as React from "react";
import Head from "next/head";

export type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
};

const defaultTitle = "Long Island JavaScript Meetup";
const defaultDescription =
  "The official website of the Long Island JavaScript Meetup. Meets on the last Wednesday of every month.";
const defaultUrl = "https://www.lijs.org/";

export const SEO = (props: SEOProps) => {
  const {
    title = defaultTitle,
    description = defaultDescription,
    url = defaultUrl,
  } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content=""></meta>
    </Head>
  );
};
