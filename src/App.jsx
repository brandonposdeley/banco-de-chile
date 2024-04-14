
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Intake from './pages/Intake';
import CalculateProfitability from './pages/CalculateProfitability';
import Parameters from './pages/Parameters';

import 'flatpickr/dist/flatpickr.min.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intake" element={<Intake />} />
      <Route path="/calculateProfitability" element={<CalculateProfitability />} />
      <Route path="/parameters" element={<Parameters />} />
    </Routes>
  )
}

export default App
