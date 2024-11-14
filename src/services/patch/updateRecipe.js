import axios from 'axios';

const updateRecipe = async (recipeId, recipeData) => {
  try {
    // Build the data object, only including defined values
    const updatedData = {
      ...(recipeData.title && { title: recipeData.title }),
      ...(recipeData.description && { description: recipeData.description }),
      ...(recipeData.ingredients && { ingredients: recipeData.ingredients }),
      ...(recipeData.steps && { steps: recipeData.steps }),
      ...(recipeData.image && { image: recipeData.image }),
      ...(recipeData.categories && { categories: recipeData.categories }),
      ...(typeof recipeData.evaluation === 'number' && { evaluation: recipeData.evaluation }), // Must check for number
      ...(typeof recipeData.preparation_time_in_minutes === 'number' && { preparation_time_in_minutes: recipeData.preparation_time_in_minutes }),
    };

    console.log('Recipe data being sent:', updatedData); // Log the data being sent

    const response = await axios.patch(
      `https://t2-24-2-backend.onrender.com/recipes/${recipeId}`,
      updatedData,
      {
        headers: {
          Authorization: 'Bearer panconqueso',
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

export default updateRecipe;
