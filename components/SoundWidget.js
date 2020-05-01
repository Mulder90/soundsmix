import React, { useState, useEffect } from "react";

import styles from "./SoundWidget.module.scss";

const SoundWidget = ({ title, path }) => {
  const id = `sound-${title}`;
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(100);

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

  const onVolumeChange = (evt) => {
    if (audioTag) {
      setVolume(evt.target.value);
      audioTag.volume = evt.target.value / 100;
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
            {isActive ? "Playing" : "Start"}
          </div>
        </div>
        <input
          className={`${styles.volumeSliderWrapper} ${
            !isActive ? styles.disabled : ""
          }`}
          disabled={isActive ? false : true}
          type="range"
          min="0"
          max="100"
          step="1"
          value={volume}
          onChange={onVolumeChange}
        />
      </div>
    </div>
  );
};

export default SoundWidget;
