import { PresentationIcon, SolutionIcon, DiscussionIcon, InteractiveIcon, ForTheTeacherIcon, ConfectionIcon } from '/src/components/Icons';
import "./css/Buttons.css";

export default function PuzzleButtons({ callback, puzzle, status }) {
  function isActive(type) {
    return status === type ? " button-active" : "";
  }

  return (
    <div className="flex-justified">
      <div className="buttons">
        {puzzle.apresentacao && <div className={"button button-blue" + isActive("apresentacao")} onClick={() => callback("apresentacao")}>
          <PresentationIcon />
          Apresentação
        </div>}
        {puzzle.solucao && <div className={"button button-purple" + isActive("solucao")} onClick={() => callback("solucao")}>
          <SolutionIcon />
          Solução
        </div>}
        {puzzle.discussao && <div className={"button button-red" + isActive("discussao")} onClick={() => callback("discussao")}>
          <DiscussionIcon />
          Discussão
        </div>}
        {puzzle.geogebra && <div className={"button button-green" + isActive("geogebra")} onClick={() => callback("geogebra")}>
          <InteractiveIcon />
          Desafio Interativo
        </div>}
        {puzzle.docente && <div className={"button button-yellow" + isActive("docente")} onClick={() => callback("docente")}>
          <ForTheTeacherIcon />
          Docente
        </div>}
        {puzzle.confeccao && <div className={"button button-cyan" + isActive("confeccao")} onClick={() => callback("confeccao")}>
          <ConfectionIcon />
          Confecção
        </div>}
      </div>
    </div>
  )
}