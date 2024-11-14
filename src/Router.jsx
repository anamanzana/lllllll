import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import CreateRecipePage from './pages/CreateRecipePage/CreateRecipePage';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/recetas" element={<RecipesPage />} />
        <Route path="/create" element={<CreateRecipePage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
