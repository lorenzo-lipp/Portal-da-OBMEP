import { Link } from 'react-router-dom';
import "./css/Puzzle.css";

export default function Puzzle({ puzzle, puzzleId }) {
  let id = puzzleId;
  
  return (
    <>
      <Link to={"?desafio=" + id} className="puzzle unactive">
        <img className="puzzle-icon" src={"files/puzzles/icons/" + puzzle.icon} alt="ícone do desafio" loading="lazy" />
        <header className="puzzle-header">
          <div className="puzzle-top">
            <p className={"puzzle-new" + (puzzle.new ? "" : " hidden")}>NOVO</p>
            <p className={"puzzle-geogebra" + (puzzle.geogebra ? "" : " hidden")}>INTERATIVO</p>
          </div>
          <div className="puzzle-bottom">
            <p className="puzzle-name">{puzzle.name}</p>
          </div>
        </header>
      </Link>
    </>
  )
}