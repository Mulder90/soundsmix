import React, { useState, useEffect } from "react";

import styles from "./SoundWidget.module.scss";

const SoundWidget = ({ title, path }) => {
  const id = `sound-${title}}`;
  const [isActive, setIsActive] = useState(false);
  let audioTag;

  useEffect(() => {
    audioTag = document.getElementById(id);
  });

  const onPlayPause = () => {
    if (audioTag) {
      setIsActive(!isActive);
      audioTag.paused ? audioTag.play() : audioTag.pause();
    }
  };

  return (
    <div
      className={`${styles.widget} ${isActive ? styles.active : ""}`}
      data-active={isActive}
    >
      <audio loop src={path} id={id} preload="none">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.controls}>
        <div className={styles.playWrapper} onClick={onPlayPause}>
          <div className={styles.playPause}>
            {isActive ? "playing" : "play"}
          </div>
        </div>
        <div
          className={`${styles.volumeSliderWrapper} ${
            !isActive ? styles.disabled : ""
          }`}
          disabled={isActive ? false : true}
        ></div>
      </div>
    </div>
  );
};

export default SoundWidget;
