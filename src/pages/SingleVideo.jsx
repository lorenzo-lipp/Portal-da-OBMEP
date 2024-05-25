import Loading from "/src/components/Loading";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import Video from "/src/components/Video";
import { useState, useEffect } from "react";

export default function SingleLesson({ videoId }) {
  let [videoData, setVideoData] = useState({});
  let video = videoData[videoId];

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/videoData.json`)
      .then(data => data.json())
      .then(jsonData => setVideoData(jsonData))
      .catch(console.log);
  }, []);
  
  return (
    <>
      <Navbar />
      {videoData[videoId] ? 
        <>
          <h1>{video.name}</h1>
          <div className="file">
            <Video videoSrc={video.videoSrc} />
          </div> 
          <Rate name={video.name} />
        </> :
        <Loading />
      }
      <Footer />
    </>
  );
}