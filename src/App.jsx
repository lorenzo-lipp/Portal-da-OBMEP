import './App.css'
import useQuery from './hooks/useQuery';

import Home from './pages/Home';
import Challenges from './pages/Challenges';

export default function App() {
  let query = useQuery();
  let puzzleId = query.get("desafio")
  
  return puzzleId ? <Challenges puzzleId={puzzleId}/> : 
        <Home/>
}
