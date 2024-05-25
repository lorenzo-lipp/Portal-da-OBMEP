import { ExternalLinkIcon } from "/src/components/Icons";
import "./css/PDF.css";

export default function PDF({ puzzle, type, puzzleId }) {
  let drive = puzzle[type];
  const driveLink = `https://drive.google.com/file/d/${drive}/view`;
  const portalLink = `https://portaldaobmep.impa.br/index.php/modulo/ver?modulo=${puzzle.portalID}`
  const iframeLink = `https://docs.google.com/viewer?srcid=${drive}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`

  return (
    <>
      <iframe className="pdf" src={iframeLink}></iframe>
      <div className="controllers-wrapper">
        <a href={driveLink} target="_blank" className="button drive">Abrir no drive  <ExternalLinkIcon /></a>
        {puzzle.portalID ? <a href={portalLink} target="_blank" className="button drive button-green">Abrir no portal  <ExternalLinkIcon /></a> : <></>}
      </div>
    </>
  );
}