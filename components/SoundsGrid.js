import React from "react";

import styles from "./SoundsGrid.module.scss";

const SoundsGrid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default SoundsGrid;
