import challenges from "/src/utils/challenges.js";
import Buttons from "/src/components/Buttons";
import Geogebra from "/src/components/Geogebra";
import PDF from "/src/components/PDF";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Challenges() {
  let { puzzleId } = useParams();
  let id = puzzleId;
  let puzzle = challenges[id];
  let [selected, setSelected] = useState("");

  useEffect(() => {
    if (puzzle.geogebra) changeSelected("geogebra");
    else changeSelected("apresentacao");
  }, []);

  function changeSelected(param) {
    setSelected("");
    setTimeout(() => setSelected(param), 500);
  }

  function getEmbed(selected) {
    if (selected === "") return (<div className="empty-iframe"></div>);
    if (selected === "geogebra") return (<Geogebra puzzle={puzzle} />);
    return (<PDF code={puzzle[selected]} />);
  }
  
  return (
    <>
      <Navbar showSearch={false} />
      <h1>{puzzle.name}</h1>
      <div style={{display: "flex", justifyContent: "center"}}><img className="header" src={"/headers/" + puzzle.header} /></div>
      <Buttons callback={changeSelected} puzzle={puzzle} status={selected}/>
      <div className="file">
        {getEmbed(selected)}
      </div> 
      <Footer />
    </>
  )
}