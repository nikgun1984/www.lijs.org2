import * as React from "react";
import { tw } from "twind";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

export type LayoutProps = {
  /**
   * Optionally render children
   */
  children?: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <div className={tw`flex min-h-screen`}>
      <aside className={tw`bg-blue-100 py-2 px-4`}>
        <div className={tw`flex items-center`}>
          <Link href="/">
            <a className={tw`font-bold`}>
              <div className={tw`flex items-center`}>
                <img
                  className={tw`h-20 w-20 mr-2`}
                  src="lijs-logo.png"
                  alt="Long Island JavaScript"
                />
                <div>
                  <span className={tw`text-2xl`}>Long Island </span>
                  <span className={tw`text-3xl`}>JavaScript</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <ul className={tw`mt-8`}>
          <li>
            <Link href="/about">
              <a
                className={tw`flex items-center py-2 px-4 text(xl blue-500) hover:bg-blue-200 focus:bg-blue-200 rounded-lg transition-colors duration-200`}
              >
                <FaUsers className="mr-2" />
                About
              </a>
            </Link>
          </li>
        </ul>
      </aside>
      <main className={tw`container mx-auto p-4`}> {children}</main>
    </div>
  );
};
