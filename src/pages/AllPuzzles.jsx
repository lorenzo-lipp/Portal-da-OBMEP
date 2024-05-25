import PuzzleGrid from '/src/components/PuzzleGrid';
import Loading from '/src/components/Loading';
import NoMatches from '/src/components/NoMatches';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import filterPuzzles from "/src/utils/filterPuzzles.js";
import sortPuzzles from "/src/utils/sortPuzzles.js";
import getFakePuzzleConditions from "/src/utils/getFakePuzzleConditions.js";
import { useEffect, useState } from 'react';

export default function AllPuzzles() {
  const [puzzleData, setPuzzleData] = useState({});
  const puzzles = Object.keys(puzzleData);
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState({});
  const puzzleList = [
    puzzles.filter(filterPuzzles(puzzleData, 1, search, Object.keys(keywords))),
    puzzles.filter(filterPuzzles(puzzleData, 2, search, Object.keys(keywords)))
  ];
  const showIf = [
    getFakePuzzleConditions(puzzleList[0]),
    getFakePuzzleConditions(puzzleList[1])
  ];
  
  puzzleList[0].sort(sortPuzzles(puzzleData));
  puzzleList[1].sort(sortPuzzles(puzzleData));

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
      <h1>Quebra-cabeças</h1>
      
      <div className="grid-container">
        {puzzles.length > 0 ? 
          <>
            <PuzzleGrid puzzleData={puzzleData} puzzleList={puzzleList} showIf={showIf}/>
            <NoMatches show={!puzzleList[0].length && !puzzleList[1].length} search={search} keywords={keywords}/>
          </> :
          <Loading />
        }
      </div>

      <Footer />
    </>
  )
}