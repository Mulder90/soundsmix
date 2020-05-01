import React from "react";
import Link from "next/link";
import { NextSeo } from "next-seo";

import styles from "./Header.module.scss";

const Header = ({ title, description }) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <header className={styles.header}>
        <h1>
          <Link href="/">
            <a>SoundsMix</a>
          </Link>
        </h1>
        <h2>Combine sounds and relax</h2>
      </header>
    </>
  );
};

export default Header;
