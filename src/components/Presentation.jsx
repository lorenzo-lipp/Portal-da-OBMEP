import { ExternalLinkIcon } from "/src/components/Icons";
import "./css/PDF.css";

export default function Presentation({ name, drive, pages, lessonId }) {
  const externalLink = `https://drive.google.com/file/d/${drive}/view`;
  const iframeLink = `https://docs.google.com/viewer?srcid=${drive}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`

  return (
    <>
      <div className="pptx-wrapper">
        <iframe className="pptx" src={iframeLink}></iframe>
      </div>
      <div className="controllers-wrapper">
        <a href={externalLink} target="_blank" className="button drive">Abrir no drive  <ExternalLinkIcon /></a>
      </div>
    </>
  );
}