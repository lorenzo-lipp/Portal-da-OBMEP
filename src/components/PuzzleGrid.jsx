import Puzzle from '/src/components/Puzzle';
import FakePuzzle from '/src/components/FakePuzzle';
import "./css/Grid.css";

export default function PuzzleGrid({ puzzleData, puzzleList, showIf }) {
  
  return (
    <>
      {puzzleList.length ? 
        <div className="grid">
          {puzzleList.map(id => <Puzzle puzzle={puzzleData[id]} puzzleId={id} key={"puzzle" + id + puzzleList.length} />)}
          <FakePuzzle showIf={showIf} />
        </div> 
      : <></>}
    </>
  )
            
}