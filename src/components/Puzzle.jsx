import challenges from "/src/utils/challenges.js";
import { Link } from 'react-router-dom';

export default function Puzzle({ puzzleId }) {
  let id = puzzleId;
  let puzzle = challenges[id];

  return (
    <>
      <Link to={"/desafios/" + id} className="puzzle unactive">
        <img className="puzzle-icon" src={"/icons/" + puzzle.icon} />
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