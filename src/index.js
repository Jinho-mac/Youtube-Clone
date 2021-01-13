import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import '@fortawesome/fontawesome-free/js/all.js';
import './components/header/header.module.css';
import './components/video/video.module.css';
import './components/videos/videos.module.css';
import './App.module.css';
import Server from './service/server';

const server = new Server();

ReactDOM.render(
  <React.StrictMode>
    <App server={server}/>
  </React.StrictMode>,
  document.getElementById('root')
);

