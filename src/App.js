import React from 'react';
import Intro from './components/Intro/Intro'
import Game from './components/Game/Game'
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate("/intro")
    }, 2500);
  }

  return (
    <div>
      {/* header */}
      <Routes>
        <Route path='/tic-tac-toe' element={<Intro buttonClickHandler={handleClick} />} />
        <Route path='/intro' element={<Game />} />
        <Route path="*" element={<Navigate to="/intro" />} />
      </Routes>
    </div>
  )
}


export default App;
