import * as React from "react";
import { tw } from "twind";

export type LayoutProps = {
  /**
   * Optionally render children
   */
  children?: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return <div className={tw`bg-blue-900 min-h-screen`}>{children}</div>;
};
