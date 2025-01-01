import React from 'react';
import { TypeProvider } from './context/TypeContext';
import HomePage from './pages/HomePage';
import { LoginProvider } from './context/LoginContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteShow from './components/subComponents/NoteShow';
import DiaryShow from './components/subComponents/DiaryShow';
import TimeTableShow from './components/subComponents/TimeTableShow';

function App() {
  return (
    <TypeProvider>
      <LoginProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/notes' element={<NoteShow />} />
            <Route path='/diary' element={<DiaryShow />} />
            <Route path='/timetable' element={<TimeTableShow />} />
          </Routes>
        </Router>
      </LoginProvider>
    </TypeProvider>
  );
}

export default App;
