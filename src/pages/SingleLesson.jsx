import lessonData from "/src/data/lessonData.json";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import Presentation from "/src/components/Presentation";

export default function SingleLesson({ lessonId }) {
  let { name, image, drive, pages } = lessonData[lessonId];

  if (!name) return <></>;
  
  return (
    <>
      <Navbar />
      <h1>{name}</h1>
      <div className="file">
        <Presentation lessonId={lessonId} drive={drive} name={name} pages={pages} />
      </div> 
      <Rate puzzle={name} />
      <Footer />
    </>
  );
}