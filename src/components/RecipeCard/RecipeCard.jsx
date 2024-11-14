import React, { useState } from 'react';
import RecipeModal from '../RecipeModal/RecipeModal';

const RecipeCard = ({ recipe, onEdit }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="recipe-image" />
      <h2 className="recipe-title">{recipe.title}</h2>
      <p className="recipe-description">{recipe.description}</p>
      {/* Trigger the modal opening in the parent component */}
      <button onClick={onEdit}>Edit Recipe</button>
    </div>
  );
};

export default RecipeCard;