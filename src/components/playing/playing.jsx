import React from 'react';
import styles from './playing.module.css';

const Playing = ({ video }) => {

  const data = video[0];
  const { title, description } = data.snippet;
  const id = data.id;
  const url = `https://www.youtube.com/embed/${id}`

  return (
    <div className={styles.videoContainer}>
      <iframe 
      id="ytplayer" 
      type="text/html"
      src={url}
      frameBorder="0" 
      allowFullScreen
      className={styles.videoPlayer}
      title="videoPlayer"
      >
      </iframe>
      <div className={styles.metaData}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>[Description]</p>
        {description}
      </div>
    </div>
  )
};

export default Playing;