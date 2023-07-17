import videoData from "/src/data/videoData.json";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import Video from "/src/components/Video";

export default function SingleLesson({ videoId }) {
  let { name, videoSrc } = videoData[videoId];

  if (!name) return <></>;
  
  return (
    <>
      <Navbar />
      <h1>{name}</h1>
      <div className="file">
        <Video videoSrc={videoSrc} />
      </div> 
      <Rate puzzle={name} />
      <Footer />
    </>
  );
}