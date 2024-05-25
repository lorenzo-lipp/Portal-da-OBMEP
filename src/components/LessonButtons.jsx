import { PresentationIcon, ForTheTeacherIcon, PuzzleIcon } from '/src/components/Icons';
import "./css/Buttons.css";

export default function LessonButtons({ callback, lesson, status }) {
  function isActive(type) {
    return status === type ? " button-active" : "";
  }

  return (
    <div className="flex-justified">
      <div className="buttons">
        {lesson.drive && <div className={"button button-yellow" + isActive("lesson")} onClick={() => callback("lesson")}>
          <ForTheTeacherIcon />
          Aula em slides
        </div>}
        {lesson.video && <div className={"button button-purple" + isActive("video")} onClick={() => callback("video")}>
          <PresentationIcon />
          Vídeo Aula
        </div>}
        {lesson.related && <div className={"button button-green" + isActive("related")} onClick={() => callback("related")}>
          <PuzzleIcon />
          Quebra-cabeças
        </div>}
      </div>
    </div>
  )
}