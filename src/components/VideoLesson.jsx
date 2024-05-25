import "./css/Card.css";
import "./css/VideoLesson.css";
import "./css/Buttons.css";
import { Link } from 'react-router-dom';

export default function VideoLesson({ name, imgSrc, videoId }) {
  return (
    <div className="card card-video">
      <Link to={"?video=" + videoId}>
        <div className="img-wrapper">
          <div className="video-animation">
            <img src={"/files/lessons/icons/" + imgSrc} alt={"Ícone de " + name} loading="lazy" />
          </div>
        </div>
        <div className="button button-purple">{name}</div>
      </Link>
    </div>
  );
}