import React, { useState } from 'react';
import Video from '../video/video.jsx';
import styles from './videos.module.css';

const Videos = ({ videos, onSelect, ifPlaying }) => {
  const [selected, setSelected] = useState();
  const stylePlaying = ifPlaying ? styles.playing : styles.notPlaying;

  const handleSelect = id => {
    onSelect(id);
    setSelected(id);
  }

  return (
    <ul className={`${styles.container} ${stylePlaying}`}>
      {videos.map(item => {
        return <Video
        key={item.id}
        id={item.id}
        title={item.snippet.title}
        thumbnailUrl={item.snippet.thumbnails.default.url}
        publishedAt={item.snippet.publishedAt}
        onSelect={handleSelect}
        ifPlaying={ifPlaying && 'playing'}
        ifSelected={selected === item.id && 'selected'}
        />
      })}
    </ul>
  )
}

export default Videos;