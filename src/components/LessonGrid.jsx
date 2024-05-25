import Lesson from '/src/components/Lesson';

export default function LessonGrid({ data }) {
  let lessonList = Object.keys(data);
  
  return (
    <>
      <div className="card-container">
        {lessonList.map(id => <Lesson lessonId={id} name={data[id].name} imgSrc={data[id].image} key={"lesson" + id} />)}
      </div>
    </>
  )
            
}