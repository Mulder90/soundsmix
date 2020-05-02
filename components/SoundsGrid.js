import React from "react";

import styles from "./SoundsGrid.module.scss";

const SoundsGrid = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default SoundsGrid;
