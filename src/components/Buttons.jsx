import { PresentationIcon, SolutionIcon, DiscussionIcon, InteractiveIcon, ForTheTeacherIcon, ConfectionIcon } from '/src/components/Icons';

export default function Buttons({ callback, puzzle, status }) {
  function isActive(type) {
    return status === type ? " button-active" : "";
  }

  return (
    <div className="flex-justified">
      <div className="buttons">
        <div className={"button button-blue" + isActive("apresentacao")} onClick={() => callback("apresentacao")}>
          <PresentationIcon />
          Apresentação
        </div>
        <div className={"button button-purple" + isActive("solucao")} onClick={() => callback("solucao")}>
          <SolutionIcon />
          Solução
        </div>
        <div className={"button button-red" + isActive("discussao")} onClick={() => callback("discussao")}>
          <DiscussionIcon />
          Discussão
        </div>
        {puzzle.geogebra && <div className={"button button-green" + isActive("geogebra")} onClick={() => callback("geogebra")}>
          <InteractiveIcon />
          Desafio Interativo
        </div>}
        <div className={"button button-yellow" + isActive("docente")} onClick={() => callback("docente")}>
          <ForTheTeacherIcon />
          Docente
        </div>
        <div className={"button button-cyan" + isActive("confeccao")} onClick={() => callback("confeccao")}>
          <ConfectionIcon />
          Confecção
        </div>
      </div>
    </div>
  )
}