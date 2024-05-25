import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import Card from '/src/components/Card';

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>Venha estudar com a gente!</h1>
      <div className="card-container">
        <Card imgSrc="jigsaw.png" text="Quebra-cabeças" url="/?desafios" />
        <Card imgSrc="teacher.png" text="Aulas introdutórias" url="/?aulas" />
      </div>
      <Footer />
    </>
  )
}