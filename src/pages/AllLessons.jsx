import Navbar from '/src/components/Navbar';
import Footer from '/src/components/Footer';
import LessonGrid from '/src/components/LessonGrid';
import { useEffect } from 'react';

export default function AllLessons() {
  function handleScroll() {
    let lessons = document.querySelectorAll(".write-effect");

    lessons.forEach(v => {
      if (v.getBoundingClientRect().top < window.innerHeight) v.classList.add("active");
    });
  }

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);
  
  return (
    <>
      <Navbar />
      <h1>Aulas introdutórias</h1>
      <LessonGrid />
      <Footer />
    </>
  )
}