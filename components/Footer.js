import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Built by{" "}
      <a href="https://github.com/Mulder90" target="_blank" rel="noopener">
        Lorenzo Cinque
      </a>
    </footer>
  );
};

export default Footer;
