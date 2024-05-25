import "./css/Card.css";
import "./css/Lesson.css";
import "./css/Buttons.css";
import { Link } from 'react-router-dom';

export default function Lesson({ name, imgSrc, lessonId }) {
  return (
    <div className="card card-lesson">
      <Link to={"?aula=" + lessonId}>
        <div className="img-wrapper">
          <div className="write-effect">
            <img src={"/files/lessons/icons/" + imgSrc} alt={"Ícone de " + name} loading="lazy" />
          </div>
        </div>
        <div className="button button-green">{name}</div>
      </Link>
    </div>
  );
}