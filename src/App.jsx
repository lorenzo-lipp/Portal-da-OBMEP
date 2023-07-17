import './App.css';
import useQuery from './hooks/useQuery';

import Home from './pages/Home';
import AllPuzzles from './pages/AllPuzzles';
import AllLessons from './pages/AllLessons';
import AllVideos from './pages/AllVideos';
import SinglePuzzle from './pages/SinglePuzzle';
import SingleLesson from './pages/SingleLesson';
import SingleVideo from './pages/SingleVideo';

export default function App() {
  let query = useQuery();
  let puzzleId = query.get("desafio");
  let lessonId = query.get("aula");
  let videoId = query.get("video");
  let showPuzzles = query.get("desafios");
  let showLessons = query.get("aulas");
  let showVideos = query.get("videoaulas");

  if (puzzleId) return (<SinglePuzzle puzzleId={puzzleId} />);
  if (lessonId) return (<SingleLesson lessonId={lessonId} />);
  if (videoId) return (<SingleVideo videoId={videoId} />);
  if (showPuzzles !== null) return (<AllPuzzles />);
  if (showLessons !== null) return (<AllLessons />);
  if (showVideos !== null) return (<AllVideos />);
  return (<Home />);
}
