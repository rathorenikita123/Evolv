import Card from './components/Crad/Card';
import Workout from './components/Workout/Workout';
import Nutrition from './components/Nutrition/Nutrition';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Card />
      <Routes>
            <Route exact path="/workout" element={<Workout/>} />
            <Route exact path="/nutrition" element={<Nutrition/>} />
        </Routes>
    </div>
  );
}

export default App;
