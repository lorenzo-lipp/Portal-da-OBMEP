import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import VideoLessonGrid from '/src/components/VideoLessonGrid';
import { useEffect } from "react";

export default function AllVideos() {
  function handleScroll() {
    let videos = document.querySelectorAll(".video-animation");

    videos.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) v.classList.add("active");
    });
  }

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);
  
  return (
    <>
      <Navbar />
      <h1>Vídeo aulas</h1>
      <VideoLessonGrid />
      <Footer />
    </>
  )
}