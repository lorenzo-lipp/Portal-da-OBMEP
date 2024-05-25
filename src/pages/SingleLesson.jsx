import Loading from "/src/components/Loading";
import LessonButtons from "/src/components/LessonButtons";
import Video from "/src/components/Video";
import Navbar from "/src/components/Navbar";
import Footer from "/src/components/Footer";
import Rate from "/src/components/Rate";
import Presentation from "/src/components/Presentation";
import PuzzleGrid from '/src/components/PuzzleGrid';
import getFakePuzzleConditions from "/src/utils/getFakePuzzleConditions.js";
import { useState, useEffect } from "react";

export default function SingleLesson({ lessonId }) {
  let [lessonData, setLessonData] = useState({});
  let [puzzleData, setPuzzleData] = useState({});
  let lesson = lessonData[lessonId];
  let [selected, setSelected] = useState("lesson");

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/lessonData.json`)
      .then(data => data.json())
      .then(jsonData => setLessonData(jsonData))
      .catch(console.log);

    fetch(`${window.location.protocol}//${window.location.host}/data/puzzleData.json`)
      .then(data => data.json())
      .then(jsonData => setPuzzleData(jsonData))
      .catch(console.log);
  }, []);

  function changeSelected(param) {
    if (selected === param) return;
    setSelected(param);
  }

  function getEmbed(selected) {
    if (selected === "lesson") return (<Presentation lessonId={lessonId} drive={lesson.drive} name={lesson.name} />);
    if (selected === "related") {
      const puzzleList = lesson.related;
      const showIf = getFakePuzzleConditions(puzzleList);

      return (<PuzzleGrid puzzleData={puzzleData} puzzleList={puzzleList} showIf={showIf}/>);
    }
    return (<Video videoSrc={lesson.video} />);
  }

  function handleScroll() {
    let puzzles = document.querySelectorAll(".puzzle");

    puzzles.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) {
        v.classList.add("active");
        v.classList.remove("unactive");
      }
    });
  }

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, [puzzleData]);

  useEffect(() => {
    handleScroll();
  }, [selected])


  if (!lessonData) return <></>;
  
  return (
    <>
      <Navbar />
      {lessonData[lessonId] ?
        <>
          <h1>{lesson.name}</h1>
          {lesson.drive && lesson.video ? <LessonButtons callback={changeSelected} lesson={lesson} status={selected}/> : <></>}
          <div className="file">
            {getEmbed(selected)}
          </div> 
          <Rate name={lesson.name} />
        </> :
        <Loading />
      }
      <Footer />
    </>
  );
}