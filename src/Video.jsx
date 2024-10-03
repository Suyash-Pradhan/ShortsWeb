import React, { useRef, useState } from 'react';
import Videofooter from './Videofooter';
import "./Video.css";
import Sideicons from './Sideicons';

function Video({ url, channel, desc, song, like, msg, share }) {
  const [isplaying, setplaying] = useState(false);
  const ref = useRef(null);

  // Function to determine if the link is YouTube Shorts
  const isYouTubeShorts = (url) => {
    return url.includes('youtube.com/shorts');
  };

  // Function to determine if the link is Instagram Reels
  const isInstagramReels = (url) => {
    return url.includes('instagram.com');
  };

  const handle_onclick_player = () => {
    if (isplaying) {
      ref.current.pause();
      setplaying(false);
    } else {
      ref.current.play();
      setplaying(true);
    }
  };

  const renderVideoPlayer = () => {
    // YouTube Shorts embedding
    if (isYouTubeShorts(url)) {
      const youtubeEmbedUrl = url.replace('youtube.com/shorts/', 'youtube.com/embed/') + '?controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1';
      return (
        <iframe
          className="Video_Player"
          src={youtubeEmbedUrl}
          title="YouTube Shorts Player"
          width="100%"
          height="500"
          allowFullScreen
        />
      );
    }

    // Instagram Reels embedding
    if (isInstagramReels(url)) {
      return (
        <iframe
          className="Video_Player"
          src={`${url}embed`}
          title="Instagram Reels Player"
          width="100%"
          height="500"
          allowFullScreen
        />
      );
    }

    // Regular video player from Firebase or other sources
    return (
      <video
        className="Video_Player"
        loop
        autoPlay
        onClick={handle_onclick_player}
        ref={ref}
        src={url}
      />
    );
  };

  return (
    <div className='video'>
      {renderVideoPlayer()}
      <Videofooter channel={channel} desc={desc} song={song} />
      <Sideicons likes={like} msg={msg} share={share} />
    </div>
  );
}

export default Video;
