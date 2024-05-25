import PuzzleGrid from '/src/components/PuzzleGrid';
import Loading from '/src/components/Loading';
import NoMatches from '/src/components/NoMatches';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import filterPuzzles from "/src/utils/filterPuzzles.js";
import sortPuzzles from "/src/utils/sortPuzzles.js";
import getFakePuzzleConditions from "/src/utils/getFakePuzzleConditions.js";
import { useEffect, useState } from 'react';

export default function ShowPuzzles({ level }) {
  const [puzzleData, setPuzzleData] = useState({});
  const puzzles = Object.keys(puzzleData);
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState({});
  const puzzleList = puzzles.filter(filterPuzzles(puzzleData, level, search, Object.keys(keywords)));
  const showIf = getFakePuzzleConditions(puzzleList);
  
  puzzleList.sort(sortPuzzles(puzzleData));

  function handleScroll() {
    let puzzles = document.querySelectorAll(".puzzle");

    puzzles.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) {
        v.classList.add("active");
        v.classList.remove("unactive");
      }
    });
  }

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/puzzleData.json`)
      .then(data => data.json())
      .then(jsonData => setPuzzleData(jsonData))
      .catch(console.log);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, [puzzleData]);

  useEffect(handleScroll, [search, keywords]);

  return (
    <>
      <Navbar data={puzzleData} search={search} callback={setSearch} keywords={keywords} setKeywords={setKeywords} />
      {level < 3 ? <h1>Nível {level}</h1> : <h1>Atividades Diversas</h1>}
      
      <div className="grid-container">
        {puzzles.length > 0 ? 
          <>
            <PuzzleGrid puzzleData={puzzleData} puzzleList={puzzleList} showIf={showIf}/>
            <NoMatches show={!puzzleList.length} search={search} keywords={keywords}/>
          </> :
          <Loading />
        }
      </div>

      <Footer />
    </>
  )
}