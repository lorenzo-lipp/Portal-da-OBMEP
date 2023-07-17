import "./css/Geogebra.css";

export default function Geogebra({ puzzle }) {
  return (
    <iframe className="geogebra" allowFullScreen="allowfullscreen" scrolling="no" src={"https://www.geogebra.org/material/iframe/id/" + puzzle.geogebra + "/width/760/height/580/border/ffffff/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false"} />
  );
}