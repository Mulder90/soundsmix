import React from "react";
import { NextSeo } from "next-seo";

import styles from "./Header.module.scss";

const Header = ({ title, description }) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1>SoundsMix</h1>
          <img src="/images/blender.svg" width="50" alt="Mixer" />
        </div>
        <h2>
          Mix sounds and create the perfect combination to relax, study or work.
        </h2>
      </header>
    </>
  );
};

export default Header;
