import * as React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";

export type AboutProps = {
  children: React.ReactNode;
};

const About = (props: AboutProps) => {
  const { children } = props;
  return (
    <Layout>
      <SEO
        title="About LIJS"
        description="All about the Long Island JavaScript Meetup"
      />
      {children || "About Component"}
    </Layout>
  );
};

export default About;
