import axios from 'axios';

const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post('https://t2-24-2-backend.onrender.com/recipes/', recipeData, {
      headers: {
        Authorization: 'Bearer panconqueso', // Ensure correct token
        'Content-Type': 'application/json', // Ensure correct content type
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error; // Rethrow the error to be handled in the form
  }
};

export default createRecipe;
