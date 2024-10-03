import { useEffect, useState } from 'react';
import './App.css';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import analytics from './Firebase';
const firestore = getFirestore(analytics);

import Video from './Video';

function App() {

  const writing_data = async () => {
    const res = await addDoc(collection(firestore, 'shorts'), {
       url:"https://cdn.pixabay.com/video/2022/04/21/114694-701830300_large.mp4", song:"the songs", msg:32, like:34, channel:"kae", desc:"ye h desc", share:2
    });
    console.log("result is: ", res);
  }

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const ref = onSnapshot(collection(firestore, 'shorts'), (snapshot) => {
      const videosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(videosData);
    });
  }, [videos]);

  return (
    <>
      {/* <button onClick={writing_data}>press</button> */}
      <div className="App">
        {/* <h2>This is my first app🤯</h2> */}
        <div className='appvideos'>
          {videos.map(({ id, url, song, msg, like, channel, desc, share }) => (
            <Video
              key={id}
              url={url}
              song={song}
              msg={msg}
              like={like}
              channel={channel}
              desc={desc}
              share={share}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
