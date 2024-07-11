
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgeCal from './page/age_cal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgeCal />} />
      </Routes>
    </Router>
  );
}

export default App;
