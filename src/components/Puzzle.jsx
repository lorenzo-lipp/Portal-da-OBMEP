import puzzleData from "/src/data/puzzleData.json";
import { Link } from 'react-router-dom';
import "./css/Puzzle.css";

export default function Puzzle({ puzzleId }) {
  let id = puzzleId;
  let puzzle = puzzleData[id];

  return (
    <>
      <Link to={"?desafio=" + id} className="puzzle unactive">
        <img className="puzzle-icon" src={"/icons/" + puzzle.icon} alt="ícone do desafio" />
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