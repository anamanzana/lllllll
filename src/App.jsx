import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RecipePage from './pages/RecipesPage/RecipesPage';
import CreateRecipePage from './pages/CreateRecipePage/CreateRecipePage';
import ErrorBoundary from './components/ErrorBoundary';  // Import ErrorBoundary
import './App.css';


const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="main-container">  {/* Main container for centering and better layout */}
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Bienvenido al Recetario</div>} />
            <Route path="/recetas" element={<RecipePage />} />
            <Route path="/create" element={<CreateRecipePage />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
