import React, { useState } from 'react';
import createRecipe from '../../services/post/createRecipe'; // Import the createRecipe service
import { useNavigate } from 'react-router-dom'; // For redirection after form submission

const CreateRecipePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  const [evaluation, setEvaluation] = useState('');
  const [preparationTime, setPreparationTime] = useState(''); // Add preparation time
  const [error, setError] = useState(null); // State to hold error messages
  const [success, setSuccess] = useState(false); // State to indicate success
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ingredientsArray = ingredients.split(',').map(ing => ing.trim()).filter(ing => ing);
    const stepsArray = steps.split(',').map(step => step.trim()).filter(step => step);

    if (ingredientsArray.length < 1 || stepsArray.length < 1) {
      alert('Please enter ingredients and steps separated by commas.');
      return;
    }
    // Reset error state
    setError(null);
    setSuccess(false);

    // Validate the form fields
    if (!title || !description || !ingredients || !steps || !image || !evaluation || !preparationTime) {
      setError('All fields are required');
      return;
    }

    // Prepare the data to send to the API
    const newRecipe = {
      title,
      description,
      ingredients: ingredients.split(',').map((ing) => ing.trim()), // Convert ingredients to an array
      steps: steps.split(',').map((step) => step.trim()), // Convert steps to an array
      image,
      categories: [], // Assuming categories are not required, but leave it as an empty array for now
      evaluation: parseInt(evaluation, 10), // Convert evaluation to a number
      preparation_time_in_minutes: parseInt(preparationTime, 10), // Convert preparation time to a number
    };

    console.log('Submitting recipe:', newRecipe); // Debug: log the data being submitted

    try {
      const response = await createRecipe(newRecipe);
      console.log('API response:', response); // Debug: log the API response
      setSuccess(true); // Mark success
      setTimeout(() => navigate('/recetas'), 2000); // Redirect to the recipes page after 2 seconds
    } catch (error) {
      console.error('Error creating recipe:', error.response || error); // Log the error response
      setError('Failed to create recipe. Please try again.');
    }
  };

  return (
    <div className="recipe-form-container">
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label>
          Ingredients (comma-separated):
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., sugar, flour, butter"
            required
          />
        </label>

        <label>
          Steps (comma-separated):
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="e.g., mix, bake, cool"
            required
          />
        </label>

        <label>
          Image URL:
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </label>

        <label>
          Evaluation (0-10):
          <input
            type="number"
            value={evaluation}
            onChange={(e) => setEvaluation(e.target.value)}
            min="0"
            max="10"
            required
          />
        </label>

        <label>
          Preparation Time (in minutes):
          <input
            type="number"
            value={preparationTime}
            onChange={(e) => setPreparationTime(e.target.value)}
            min="1"
            required
          />
        </label>

        <button type="submit">Create Recipe</button>

        {/* Display error messages */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Display success message */}
        {success && <p className="success-message">Recipe created successfully! Redirecting...</p>}
      </form>
    </div>
  );
};

export default CreateRecipePage;
