import Puzzle from '/src/components/Puzzle';
import FakePuzzle from '/src/components/FakePuzzle';
import "./css/Grid.css";

export default function PuzzleGrid({ puzzleData, puzzleList, showIf }) {
  
  return (
    <>
      {puzzleList[0].length ? 
        <>
          <div className="level-1">
            <h2 className="level-name">Nível 1</h2>
            <img className="level-icon" src="/Nivel 1.png" alt="Ícone do nível 1" />
          </div>
          <div className="grid">
            {puzzleList[0].map(id => <Puzzle puzzle={puzzleData[id]} puzzleId={id} key={"puzzle" + id + puzzleList[0].length} />)}
            <FakePuzzle showIf={showIf[0]} />
          </div> 
        </>
      : <></>}
      {puzzleList[1].length ? 
        <>
          <div className="level-2">
            <h2 className="level-name">Nível 2</h2>
            <img className="level-icon" src="/Nivel 2.png" alt="Ícone do nível 2" />
          </div>
          <div className="grid">
            {puzzleList[1].map(id => <Puzzle puzzle={puzzleData[id]} puzzleId={id} key={"puzzle" + id + puzzleList[1].length} />)}
            <FakePuzzle showIf={showIf[1]} />
          </div> 
        </>
      : <></>}
    </>
  )
            
}