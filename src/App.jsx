import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from './components/header/header.jsx';
import Videos from './components/videos/videos.jsx';
import Playing from './components/playing/playing.jsx'

const App = ({ server }) => {
  const [ videos, setVideos ] = useState();
  const [ playing, setPlaying ] = useState();

  useEffect(() => {
    server
      .getPopularVideos() //
      .then(items => setVideos(items)) 
  }, [server]);

  const searchVideos = query => {
    server
      .searchVideos(query) //
      .then(items => setVideos(items));
    setPlaying(null);
  };

  const handleSelect = id => {
    const video = videos.filter(video => video.id === id);
    setPlaying(video);
  };

  return (
    <>
    <div className={styles.wrapper}>
      <Header onSearch={searchVideos} />
      <section className={styles.VideosAndPlaying}>
        {
          videos && <Videos 
          videos={videos} 
          onSelect={handleSelect} 
          ifPlaying={playing && 'playing'} 
          />
        }
        { playing && <Playing video={playing}/> }
      </section>
    </div>
      
    </>
  );
};

export default App;
