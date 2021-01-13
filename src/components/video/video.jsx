import React from 'react';
import styles from './video.module.css';

const Video = ({ id, title, thumbnailUrl, publishedAt, onSelect, ifPlaying, ifSelected }) => {

  const publishedDate = publishedAt.slice(0, 10);
  const stylePlaying = ifPlaying === 'playing' ? 
                            styles.playing : //
                            styles.notPlaying;
  const styleSelected = ifSelected && styles.selected;

  const handleSelect = () => {
    onSelect(id);
  }

  return (
    <li className={`${styles.container} ${stylePlaying}`}>
      <div 
      className={`${styles.video} ${styleSelected}`}
      onClick={handleSelect}
      >
        <div className={styles.thumbnail}>
          <img className={styles.thumbnailImg} src={thumbnailUrl} alt="thumbnail"/>
        </div>
        <div className={styles.videoContent}>
          <span className={styles.videoTitle}>{title}</span>
          <span className={styles.videoDate}>{publishedDate}</span>
        </div>
      </div>
    </li>
  )
};

export default Video;