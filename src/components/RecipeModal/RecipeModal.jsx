import React, { useState } from 'react';

const RecipeModal = ({ recipe, onUpdate, onDelete, onClose }) => {
  const [isEditing, setIsEditing] = useState(false); // To toggle between view and edit modes
  const [updatedRecipe, setUpdatedRecipe] = useState({
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.join(', '), // Convert array to string
    steps: recipe.steps.join(', '), // Convert array to string
    image: recipe.image,
    evaluation: recipe.evaluation,
    preparation_time_in_minutes: recipe.preparation_time_in_minutes,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onUpdate === 'function') {
      const updatedRecipeData = {
        ...updatedRecipe,
        ingredients: updatedRecipe.ingredients.split(',').map((ing) => ing.trim()), // Convert string back to array
        steps: updatedRecipe.steps.split(',').map((step) => step.trim()), // Convert string back to array
      };
      onUpdate(recipe.id, updatedRecipeData); // Call the update function with recipe ID and new data
      setIsEditing(false); // Switch back to view mode after saving
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${recipe.title}?`)) {
      onDelete(recipe.id);  // Call onDelete with the correct recipe ID
      onClose(); // Close the modal after delete
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        {/* Conditionally render based on whether we're in view or edit mode */}
        {isEditing ? (
          <>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={updatedRecipe.title}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Description:
                <textarea
                  name="description"
                  value={updatedRecipe.description}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Ingredients (comma-separated):
                <textarea
                  name="ingredients"
                  value={updatedRecipe.ingredients}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Steps (comma-separated):
                <textarea
                  name="steps"
                  value={updatedRecipe.steps}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Image URL:
                <input
                  type="url"
                  name="image"
                  value={updatedRecipe.image}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Evaluation (0-10):
                <input
                  type="number"
                  name="evaluation"
                  value={updatedRecipe.evaluation}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  required
                />
              </label>

              <label>
                Preparation Time (in minutes):
                <input
                  type="number"
                  name="preparation_time_in_minutes"
                  value={updatedRecipe.preparation_time_in_minutes}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </label>

              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          </>
        ) : (
          <>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%' }} />
            <p><strong>Description:</strong> {recipe.description}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Steps:</strong> {recipe.steps.join(', ')}</p>
            <p><strong>Evaluation:</strong> {recipe.evaluation}</p>
            <p><strong>Preparation Time:</strong> {recipe.preparation_time_in_minutes} minutes</p>

            {/* Buttons for editing and deleting */}
            <button onClick={() => setIsEditing(true)}>Edit Recipe</button>
            <button onClick={handleDelete} className="delete-btn">Delete Recipe</button>
            <button onClick={onClose}>Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;
