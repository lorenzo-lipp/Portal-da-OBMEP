import PuzzleGrid from '/src/components/PuzzleGrid';
import NoMatches from '/src/components/NoMatches';
import NavbarHome from '/src/components/NavbarHome';
import Footer from '/src/components/Footer';
import filterPuzzles from "/src/utils/filterPuzzles.js";
import sortPuzzles from "/src/utils/sortPuzzles.js";
import getFakePuzzleConditions from "/src/utils/getFakePuzzleConditions.js";
import { useEffect, useState } from 'react';

export default function Home() {
  const puzzles = [
    ...Array(11).fill(0).map((_, i) => i + 1)
  ];
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState({});

  const levelOne = puzzles.filter(filterPuzzles(1, search, Object.keys(keywords)));
  const levelTwo = puzzles.filter(filterPuzzles(2, search, Object.keys(keywords)));
  levelOne.sort(sortPuzzles);
  levelTwo.sort(sortPuzzles);
  let levelOneFakePuzzleConditions = getFakePuzzleConditions(levelOne);
  let levelTwoFakePuzzleConditions = getFakePuzzleConditions(levelTwo);


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
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);

  useEffect(handleScroll, [search, keywords]);

  return (
    <>
      <NavbarHome search={search} callback={setSearch} keywords={keywords} setKeywords={setKeywords} />
      <h1>Quebra-cabeças</h1>
      <div className="grid-container">

        <PuzzleGrid puzzleList={levelOne} level="1" icon="Nivel 1.png" showIf={levelOneFakePuzzleConditions}/>
        <PuzzleGrid puzzleList={levelTwo} level="2" icon="Nivel 2.png" showIf={levelTwoFakePuzzleConditions}/>
        <NoMatches show={!levelOne.length && !levelTwo.length} search={search} keywords={keywords}/>

      </div>

      <Footer />
    </>
  )
}