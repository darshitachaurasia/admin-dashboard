
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Sidebar} from './components/Sidebar';
import {Dashboard} from './pages/Dashboard';
import {Feedback} from './pages/Feedback';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
    <Router>
      <div >
        <Sidebar />
        <div >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
    </MantineProvider>
  );
}

export default App;

