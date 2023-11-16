import { ExternalLinkIcon, ArrowLeftIcon, ArrowRightIcon } from "/src/components/Icons";
import { useState } from "react";
import "./css/PDF.css";

export default function Presentation({ name, drive, pages, lessonId }) {
  let code = "https://drive.google.com/file/d/" + drive + "/view";
  let [page, setPage] = useState(1);

  function nextPage() {
    if (page + 1 > pages) return;
    setPage(page + 1);
  }

  function previousPage() {
    if (page === 1) return;
    setPage(page - 1);
  }

  return (
    <>
      <div className="preload">
        {page + 1 > pages ? <></> : <img src={`/files/lessons/${lessonId}/${page + 1}.png`} />}
      </div>
      <div className="pages-wrapper">
        <div className="page-before" onClick={previousPage} />
        <img className="page" src={`/files/lessons/${lessonId}/${page}.png`} draggable="false" />
        <div className="page-after" onClick={nextPage} />
      </div>
      <div className="controllers-wrapper">
        <div className="controllers">
          <div className="arrow-wrapper" onClick={previousPage} >
            <ArrowLeftIcon className={page !== 1 ? "" : "icon-disabled"} />
          </div>
          <div>{page} / {pages}</div>
          <div className="arrow-wrapper" onClick={nextPage} >
            <ArrowRightIcon className={page !== pages ? "" : "icon-disabled"}  />
          </div>
        </div>
        <a href={code} target="_blank" className="button drive">Abrir no drive  <ExternalLinkIcon /></a>
      </div>
    </>
  );
}