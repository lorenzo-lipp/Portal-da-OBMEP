export default function Buttons({ callback, puzzle, status }) {  
  function isActive(type) {
    return status === type ? " button-active" : "";
  }
  
  return (
    <div className="flex-justified">
      <div className="buttons">
        <div className={"button button-blue" + isActive("apresentacao")} onClick={() => callback("apresentacao")}>
          <i className="fa-solid fa-circle-play" />
          Apresentação
        </div>
        <div className={"button button-purple" + isActive("solucao")} onClick={() => callback("solucao")}>
          <i className="fas fa-lightbulb" />
          Solução
        </div>
        <div className={"button button-red" + isActive("discussao")} onClick={() => callback("discussao")}>
          <i className="fa-solid fa-users" />
          Discussão
        </div>
        {puzzle.geogebra && <div className={"button button-green" + isActive("geogebra")} onClick={() => callback("geogebra")}>
          <i className="fa-solid fa-cubes" />
          Desafio Interativo
        </div>}
        <div className={"button button-yellow" + isActive("docente")} onClick={() => callback("docente")}>
          <i className="fa-solid fa-graduation-cap" />
          Docente
        </div>
        <div className={"button button-cyan" + isActive("confeccao")} onClick={() => callback("confeccao")}>
          <i className="fa-solid fa-scissors" />
          Confecção
        </div>
      </div>
    </div>
  )
}