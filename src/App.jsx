import './App.css';
import useQuery from './hooks/useQuery';

import Home from './pages/Home';
import About from './pages/About';
import SelectPuzzles from './pages/SelectPuzzles';
import AllLessons from './pages/AllLessons';
import AllVideos from './pages/AllVideos';
import SinglePuzzle from './pages/SinglePuzzle';
import SingleLesson from './pages/SingleLesson';
import SingleVideo from './pages/SingleVideo';
import ShowPuzzles from './pages/ShowPuzzles';

export default function App() {
  let query = useQuery();
  let puzzleId = query.get("desafio");
  let lessonId = query.get("aula");
  let videoId = query.get("video");
  let selectPuzzles = query.get("desafios");
  let showLevel1 = query.get("nivel1"); 
  let showLevel2 = query.get("nivel2"); 
  let showMisc = query.get("diversas"); 
  let showLessons = query.get("aulas");
  let showVideos = query.get("videoaulas");
  let about = query.get("sobre");

  if (puzzleId) return (<SinglePuzzle puzzleId={puzzleId} />);
  if (lessonId) return (<SingleLesson lessonId={lessonId} />);
  if (videoId) return (<SingleVideo videoId={videoId} />);
  if (selectPuzzles !== null) return (<SelectPuzzles />);
  if (showLevel1 !== null) return (<ShowPuzzles level={1} />);
  if (showLevel2 !== null) return (<ShowPuzzles level={2} />);
  if (showMisc !== null) return (<ShowPuzzles level={3} />);
  if (showLessons !== null) return (<AllLessons />);
  if (showVideos !== null) return (<AllVideos />);
  if (about !== null) return (<About />)
  return (<Home />);
}
