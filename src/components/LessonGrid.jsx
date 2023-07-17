import Lesson from '/src/components/Lesson';
import lessonData from '/src/data/lessonData.json';

export default function LessonGrid() {
  let lessonList = Object.keys(lessonData);
  
  return (
    <>
      <div className="card-container">
        {lessonList.map(id => <Lesson lessonId={id} name={lessonData[id].name} imgSrc={lessonData[id].image} key={"lesson" + id} />)}
      </div>
    </>
  )
            
}