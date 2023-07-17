import Puzzle from '/src/components/Puzzle';
import FakePuzzle from '/src/components/FakePuzzle';
import "./css/Grid.css";

export default function PuzzleGrid({ puzzleList, level, icon, showIf }) {
  if (!puzzleList.length) return (<></>)
  return (
    <>
      <div className={"level-" + level}>
        <h2 className="level-name" dangerouslySetInnerHTML={{__html: "Nível " + level}}></h2>
        <img className="level-icon" src={icon} alt={"ícone do nível " + level} />
      </div>
      <div className="grid">
        {puzzleList.map(id => <Puzzle puzzleId={id} key={"puzzle" + id + puzzleList.length} />)}
        <FakePuzzle showIf={showIf} />
      </div>
    </>
  )
            
}