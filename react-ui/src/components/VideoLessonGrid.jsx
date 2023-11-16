import VideoLesson from '/src/components/VideoLesson';

export default function VideoLessonGrid({ data }) {
  let videoList = Object.keys(data);
  
  return (
    <>
      <div className="card-container">
        {videoList.map(id => <VideoLesson videoId={id} name={data[id].name} imgSrc={data[id].image} key={"video" + id} />)}
      </div>
    </>
  )
            
}