import { ExternalLinkIcon, ArrowLeftIcon, ArrowRightIcon } from "/src/components/Icons";
import { useState, useEffect } from "react";
import "./css/PDF.css";

export default function PDF({ puzzle, type, puzzleId }) {
  let code = "https://drive.google.com/file/d/" + puzzle[type].drive + "/view";
  let [page, setPage] = useState(1);
  let pagesToLoad = Array(Math.min(2, Math.max(1, 1 + puzzle[type].pages - page)));

  function nextPage() {
    if (page + 1 > puzzle[type].pages) return;
    setPage(page + 1);
  }

  function previousPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  useEffect(() => {
    setPage(1);
  }, [type])

  return (
    <>
      <div className="preload">
        {pagesToLoad.fill(0).map((_, i) => 
          <img src={`/files/puzzles/${puzzleId}/${type}${page + i}.png`} key={puzzleId + "-" + type + "-" + i} />
        )}
      </div>
      <div className="pages-wrapper">
        <div className="page-before" onClick={previousPage} />
        <img className="page" src={`/files/puzzles/${puzzleId}/${type}${page}.png`} draggable="false" alt={"Página " + page} />
        <div className="page-after" onClick={nextPage} />
      </div>
      <div className="controllers-wrapper">
        <div className="controllers">
          <div className="arrow-wrapper" onClick={previousPage} >
            <ArrowLeftIcon className={page !== 1 ? "" : "icon-disabled"} />
          </div>
          <div>{page} / {puzzle[type].pages}</div>
          <div className="arrow-wrapper" onClick={nextPage} >
            <ArrowRightIcon className={page !== puzzle[type].pages ? "" : "icon-disabled"}  />
          </div>
        </div>
        <a href={code} target="_blank" className="button drive">Abrir no drive  <ExternalLinkIcon /></a>
      </div>
    </>
  );
}