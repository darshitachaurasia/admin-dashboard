// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Feedback } from './pages/Feedback';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}
