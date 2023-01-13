import Puzzle from '/src/components/Puzzle';
import FakePuzzle from '/src/components/FakePuzzle';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import filterPuzzles from "/src/utils/filterPuzzles.js";
import sortPuzzles from "/src/utils/sortPuzzles.js";
import getFakePuzzleConditions from "/src/utils/getFakePuzzleConditions.js";
import { useEffect, useState } from 'react';

export default function Home() {
  const puzzles = [
    ...Array(10).fill(0).map((_, i) => i + 1)
  ];
  const [search, setSearch] = useState("");

  const levelOne = puzzles.filter(filterPuzzles(1, search));
  const levelTwo = puzzles.filter(filterPuzzles(2, search));
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

  useEffect(handleScroll, [search]);

  return (
    <>
      <Navbar showSearch={true} search={search} callback={setSearch} />
      <h1>Quebra-cabeças</h1>
      <div className="grid-container">

        {levelOne.length ?
          <>
            <div className="level">
              <h2 className="level-name">Nível 1</h2>
              <img className="level-icon" src="11.png" />
            </div>
            <div className="grid">
              {levelOne.map((id, iteration) => <Puzzle puzzleId={id} key={"puzzle1" + id + "n" + iteration} />)}
              <FakePuzzle showIf={levelOneFakePuzzleConditions} />
            </div>
          </>
          : <></>}

        {levelTwo.length ?
          <>
            <div className="level">
              <h2 className="level-name">Nível 2</h2>
              <img className="level-icon" src="12.png" />
            </div>
            <div className="grid">
              {levelTwo.map((id, iteration) => <Puzzle puzzleId={id} key={"puzzle2" + id + "n" + iteration} />)}
              <FakePuzzle showIf={levelTwoFakePuzzleConditions} />
            </div>
          </>
          : <></>}

        {!levelOne.length && !levelTwo.length ?
          <div className="noMatches">
            Não foi possível encontrar nenhum quebra-cabeças com esse nome!
          </div>
          : <></>}

      </div>

      <Footer />
    </>
  )
}