import VideoLesson from '/src/components/VideoLesson';
import videoData from '/src/data/videoData.json';

export default function VideoLessonGrid() {
  let videoList = Object.keys(videoData);
  
  return (
    <>
      <div className="card-container">
        {videoList.map(id => <VideoLesson videoId={id} name={videoData[id].name} imgSrc={videoData[id].image} key={"video" + id} />)}
      </div>
    </>
  )
            
}