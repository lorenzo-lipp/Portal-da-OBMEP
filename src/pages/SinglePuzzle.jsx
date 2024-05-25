import Loading from "/src/components/Loading";
import PuzzleButtons from "/src/components/PuzzleButtons";
import Geogebra from "/src/components/Geogebra";
import PDF from "/src/components/PDF";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import { useState, useEffect } from "react";

export default function SinglePuzzle({ puzzleId }) {
  let [puzzleData, setPuzzleData] = useState({});
  let id = puzzleId;
  let [selected, setSelected] = useState("");

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/puzzleData.json`)
      .then(data => data.json())
      .then(jsonData => setPuzzleData(jsonData))
      .catch(console.log);
  }, []);
  
  useEffect(() => {
    if (!puzzleData[id]) return;
    if (puzzleData[id].geogebra) changeSelected("geogebra");
    else changeSelected("apresentacao");
  }, [puzzleData]);

  function changeSelected(param) {
    if (selected === param) return;
    setSelected(param);
  }

  function getEmbed(selected) {
    if (selected === "") return (<div className="empty-iframe"></div>);
    if (selected === "geogebra") return <></>;
    return (<PDF puzzle={puzzleData[id]} puzzleId={id} type={selected} />);
  }
  
  return (
    <>
      <Navbar />
      {puzzleData[id] ?
        <>
          <h1>{puzzleData[id].name}</h1>
          <div className="flex-justified">
            <img className="header" src={"/files/puzzles/headers/" + puzzleData[id].header} alt="Cabeçalho do desafio" />
          </div>
          {puzzleData[id].apresentacao && puzzleData[id].geogebra ? <PuzzleButtons callback={changeSelected} puzzle={puzzleData[id]} status={selected}/> : <></>}
          <div className="file">
            <Geogebra show={selected === "geogebra"} puzzle={puzzleData[id]} />
            {getEmbed(selected)}
          </div> 
          <Rate name={puzzleData[id].name} />
        </> :
        <Loading />
      }
      
      <Footer />
    </>
  )
}