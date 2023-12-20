import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EditorPage from './components/EditorPage';
import { Toaster } from 'react-hot-toast';

import './App.css';
const App = () => {
  return (
    <>
      <div>
        <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
                success: {
                    theme: {
                        primary: '#4aed88',
                    },
                },
            }}
        ></Toaster>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;