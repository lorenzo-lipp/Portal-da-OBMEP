import Loading from '/src/components/Loading';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import VideoLessonGrid from '/src/components/VideoLessonGrid';
import { useEffect, useState } from "react";

export default function AllVideos() {
  let [videoData, setVideoData] = useState({});
  
  function handleScroll() {
    let videos = document.querySelectorAll(".video-animation");

    videos.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) v.classList.add("active");
    });
  }

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/videoData.json`)
      .then(data => data.json())
      .then(jsonData => setVideoData(jsonData))
      .catch(console.log);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, [videoData]);
  
  return (
    <>
      <Navbar />
      <h1>Vídeo aulas</h1>
      {Object.keys(videoData).length ? <VideoLessonGrid data={videoData} /> : <Loading />}
      <Footer />
    </>
  )
}