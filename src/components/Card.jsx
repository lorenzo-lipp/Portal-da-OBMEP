import "./css/Card.css";
import "./css/Buttons.css";
import { Link } from 'react-router-dom';

export default function Card({ imgSrc, text, url }) {
  return (
    <div className="card">
      <Link to={url}>
        <div className="img-wrapper">
          <img src={imgSrc} alt={"Ícone de " + text} />
        </div>
        <div className="button button-blue">{text}</div>
      </Link>
    </div>
  );
}