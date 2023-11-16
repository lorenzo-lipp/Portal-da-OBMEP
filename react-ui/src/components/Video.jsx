import "./css/Video.css";

export default function Video({ videoSrc, name }) {
  
  return (
    <div className="video-wrapper">
      <video className="video" controls>
        <source src={"/files/video-lessons/" + videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}