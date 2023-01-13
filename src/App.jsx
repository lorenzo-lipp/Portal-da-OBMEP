import './App.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Challenges from './pages/Challenges';

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/desafios/:puzzleId" element={<Challenges/>}></Route>
      </Routes>
    </>
  )
}
