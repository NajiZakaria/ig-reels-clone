import React, { useState, useEffect } from 'react';
import VideoCard from './VideoCard/VideoCard';
import './App.css';
import myvideo from './assets/video1.mp4';
import db from './firebase';

function App() {
  const [reels,setReels]=useState([])
  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot=>(
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  return (
    <div className="app">
      <div className="app__top">
          <img
              src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
              alt=""
          />
          <h2>Reels</h2>
      </div>
      <div className="app__videos">
        {reels.map(reel=>(
          <VideoCard
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            url={myvideo}
            song={reel.song}
            likes={reel.likes}
            shares={reel.shares}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
