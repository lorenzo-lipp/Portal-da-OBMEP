import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import '/src/components/css/AboutText.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Sobre este site:</h1>
      <div className="about-center">
        <div className="about-container">
          <p className="about-text">Este site foi criado para permitir o acesso facilitado aos desafios interativos do Portal Quebra-Cabeças de Matemática da OBMEP. 
  Todo o material contido aqui vem de lá, então não deixe de conferir o portal através <a href="https://portaldaobmep.impa.br/" target="_blank">desse link.</a></p>
          <p className="about-text">Veja abaixo um pouco mais sobre o Portal da OBMEP:</p>
          <br />
          <figure className="about-fig">
            <img className="about-img" src="/portal1.png" alt="Página inicial do Portal da OBMEP" />
            <figcaption className="about-cap">Página inicial do Portal da OBMEP</figcaption>
          </figure>
          <p className="about-text">O Portal da OBMEP reúne o Portal da Matemática OBMEP, Portal da Física OBMEP e o Portal Quebra-cabeças de Matemática OBMEP para o Ensino Fundamental. Por lá você tem acesso a esses três portais. Veja a seguir um pouco mais sobre cada um deles:</p>
          <p className="about-text">O <a href="https://portaldaobmep.impa.br/index.php/site/index?a=1" target="_blank">Portal de Matemática da OBMEP</a> oferece, gratuitamente, videoaulas, apostilas teóricas, cadernos de exercícios, problemas resolvidos, aplicativos e testes que cobrem todo o currículo de matemática do 6º ano do Ensino Fundamental ao 3º ano do Ensino Médio, além de tópicos adicionais para complementar e aprofundar o aprendizado.</p>
          <p className="about-text">O <a href="https://portaldaobmep.impa.br/index.php/site/index?a=2" target="_blank">Portal da Física da OBMEP</a>, ainda em elaboração, tem estrutura similar ao Portal da Matemática, e cobre tópicos do 9º ano do Ensino Fundamental ao 3º ano do Ensino Médio.</p>
          <p className="about-text">O <a href="https://portaldaobmep.impa.br/index.php/site/index?a=4" target="_blank">Portal Quebra-Cabeças de Matemática para o Ensino Fundamental</a> oferece um acervo de desafios matemáticos ilustrados para alunos do 4º ao 9º ano do Ensino Fundamental. Os desafios, divididos em dois níveis de dificuldade, são acompanhados de discussões sobre a solução, orientações pedagógicas e arquivos digitais para impressão de materiais que facilitam seu aproveitamento em sala de aula ou em outros espaços educativos.</p>
          <br />
          <figure className="about-fig">
            <img className="about-img" src="/portal2.png" alt="Conteúdos do Portal da OBMEP" />
            <figcaption className="about-cap">Conteúdos do Portal da OBMEP</figcaption>
          </figure>
        </div>
      </div>
      <Footer />
    </>
  )
}