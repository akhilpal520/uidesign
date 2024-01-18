import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Newsquant } from './components/Newsquant';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar/>
        <Routes>
        <Route path="/newsquant" element={<Newsquant />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
