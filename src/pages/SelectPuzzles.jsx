import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import Card from '/src/components/Card';

export default function SelectPuzzles() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card imgSrc="Nivel 1.png" text="Nível 1" url="/?nivel1" />
        <Card imgSrc="Nivel 2.png" text="Nível 2" url="/?nivel2" />
        <Card imgSrc="Diversas.png" text="Atividades Diversas" url="/?diversas" />
      </div>
      <Footer />
    </>
  )
}