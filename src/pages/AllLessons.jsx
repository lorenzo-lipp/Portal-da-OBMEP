import Loading from '/src/components/Loading';
import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import LessonGrid from '/src/components/LessonGrid';
import { useEffect, useState } from 'react';

export default function AllLessons() {
  let [lessonData, setLessonData] = useState({});
  function handleScroll() {
    let lessons = document.querySelectorAll(".write-effect");

    lessons.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) v.classList.add("active");
    });
  }

  useEffect(() => {
    fetch(`${window.location.protocol}//${window.location.host}/data/lessonData.json`)
      .then(data => data.json())
      .then(jsonData => setLessonData(jsonData))
      .catch(console.log);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, [lessonData]);
  
  return (
    <>
      <Navbar />
      <h1>Aulas introdutórias</h1>
      {Object.keys(lessonData).length ? <LessonGrid data={lessonData} /> : <Loading />}
      <Footer />
    </>
  )
}