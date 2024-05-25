import "./css/Geogebra.css";
import "./css/Buttons.css";
import useGeogebra from "/src/hooks/useGeogebra";
import { DownloadIcon, ClassroomIcon, FullscreenIcon } from "/src/components/Icons";

export default function Geogebra({ puzzle, show }) {
  let className = show ? "" : "display-none";
  
  useGeogebra(() => {
    let parameters = {
        "borderColor": "transparent",
        "material_id": puzzle.geogebra,
        "scaleContainerClass": "geogebra",
        "allowUpscale": true
    };

    if (!document.querySelector(".applet_scaler")) {
      let applet = new GGBApplet(parameters, true);
      
      applet.inject('applet_container');
    }
  });

  function toggleFullscreen() {   
    if (document.fullscreenElement) return document.exitFullscreen();
    document.querySelector(".geogebra").requestFullscreen();
  }
  
  return (
    <div className={className}>
      <div className="geogebra-container">
        <div className="geogebra">
          <div id="applet_container" />
          <div className="geogebra-fullscreen" onClick={toggleFullscreen}><FullscreenIcon /></div>
        </div>
      </div>
      <div className={"geogebra-buttons " + (show ? "" : "display-none")}>
        <div className="button button-green" onClick={() => ggbApplet.writePNGtoFile(puzzle.name + ".png", 1, false, 300)}>
          <DownloadIcon /> Tirar print
        </div>
      </div>
    </div>
  );
}