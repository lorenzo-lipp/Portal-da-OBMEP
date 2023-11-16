import Loading from "/src/components/Loading";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import Presentation from "/src/components/Presentation";
import { useState, useEffect } from "react";

export default function SingleLesson({ lessonId }) {
  let [lessonData, setLessonData] = useState({});
  let lesson = lessonData[lessonId];

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/lesson`)
      .then(data => data.json())
      .then(jsonData => setLessonData(JSON.parse(jsonData)))
      .catch(console.log);
  }, []);

  if (!lessonData) return <></>;
  
  return (
    <>
      <Navbar />
      {lessonData[lessonId] ?
        <>
          <h1>{lesson.name}</h1>
          <div className="file">
            <Presentation lessonId={lessonId} drive={lesson.drive} name={lesson.name} pages={lesson.pages} />
          </div> 
          <Rate name={lesson.name} />
        </> :
        <Loading />
      }
      <Footer />
    </>
  );
}