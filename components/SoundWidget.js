import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./SoundWidget.module.scss";

const SoundWidget = ({ title, path }) => {
  const audioId = `audio-${title}`;
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(100);

  let audioTag;

  useEffect(() => {
    audioTag = document.getElementById(audioId);
  });

  const onPlayPause = () => {
    if (audioTag) {
      setIsActive(!isActive);
      audioTag.paused ? audioTag.play() : audioTag.pause();
    }
  };

  const changeVolume = (vol) => {
    setVolume(vol);
    audioTag.volume = vol / 100;
  };

  const onVolumeChange = (evt) => {
    if (audioTag) {
      changeVolume(evt.target.value);
    }
  };

  return (
    <div
      className={`${styles.widget} ${isActive ? styles.active : ""}`}
      data-active={isActive}
    >
      <audio loop src={path} id={audioId} preload="none">
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.controls}>
        <button
          className={`${styles.playWrapper} ${isActive ? styles.active : ""}`}
          onClick={onPlayPause}
        >
          <div className={styles.playPause}>
            {isActive ? (
              <div className={styles.waveContainer}>
                <div className={`${styles.wave} ${styles.wave1}`}></div>
                <div className={`${styles.wave} ${styles.wave2}`}></div>
                <div className={`${styles.wave} ${styles.wave3}`}></div>
                <div className={`${styles.wave} ${styles.wave4}`}></div>
                <div className={`${styles.wave} ${styles.wave5}`}></div>
              </div>
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </div>
        </button>
        <div
          className={`${styles.volumeSliderWrapper} ${
            !isActive ? styles.disabled : ""
          }`}
        >
          <FontAwesomeIcon
            className={styles.volumeIcon}
            icon={faVolumeMute}
            onClick={() => changeVolume(0)}
            disabled={!isActive || !volume === 0}
          />
          <input
            id={`audio-range-${title}`}
            disabled={!isActive}
            type="range"
            min="0"
            max="100"
            step="1"
            value={volume}
            onChange={onVolumeChange}
            aria-label={`Volume Slider for ${title}`}
          />
          <FontAwesomeIcon
            className={styles.volumeIcon}
            icon={faVolumeUp}
            onClick={() => changeVolume(100)}
            disabled={!isActive || volume === 100}
          />
        </div>
      </div>
    </div>
  );
};

export default SoundWidget;
