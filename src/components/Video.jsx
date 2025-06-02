import "./css/Video.css";
import { useEffect } from "react";

export default function Video({ videoSrc }) {
  // const link = `https://docs.google.com/viewer?srcid=${videoSrc}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`;

  useEffect(() => {
      document.querySelector("#lesson-video").play();
    }, []);

  return (
    <div className="video-wrapper">
      <video id="lesson-video" className="video" controls loop>
        <source src={"/files/lessons/videos/" + videoSrc + ".mp4"} type="video/mp4" />
      </video>
    </div>
  );
}