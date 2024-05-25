import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container" >
        <div className="bottom-puzzles" />
        <div className="footer" id="footer">
          <p className="footer-text">Todo o material divulgado aqui vem do Portal Quebra-Cabeças da OBMEP.</p>
          <p className="footer-text">Você pode acessar o Portal <a href="https://portaldaobmep.impa.br/" target="_blank">clicando aqui.</a></p>
        </div>
      </div>
    </>
  )
}