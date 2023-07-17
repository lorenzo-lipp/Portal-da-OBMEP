import puzzleData from "/src/data/puzzleData.json";
import Buttons from "/src/components/Buttons";
import Geogebra from "/src/components/Geogebra";
import PDF from "/src/components/PDF";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import { useState, useEffect } from "react";

export default function SinglePuzzle({ puzzleId }) {
  let id = puzzleId;
  let puzzle = puzzleData[id];
  let [selected, setSelected] = useState("");

  if (!puzzle) return <></>;

  useEffect(() => {
    if (puzzle.geogebra) changeSelected("geogebra");
    else changeSelected("apresentacao");
  }, []);

  function changeSelected(param) {
    if (selected === param) return;
    setSelected(param);
  }

  function getEmbed(selected) {
    if (selected === "") return (<div className="empty-iframe"></div>);
    if (selected === "geogebra") return (<Geogebra puzzle={puzzle} />);
    return (<PDF puzzle={puzzle} puzzleId={id} type={selected} />);
  }
  
  return (
    <>
      <Navbar />
      <h1>{puzzle.name}</h1>
      <div className="flex-justified">
        <img className="header" src={"/headers/" + puzzle.header} alt="Cabeçalho do desafio" />
      </div>
      <Buttons callback={changeSelected} puzzle={puzzle} status={selected}/>
      <div className="file">
        {getEmbed(selected)}
      </div> 
      <Rate puzzle={puzzle.name} />
      <Footer />
    </>
  )
}