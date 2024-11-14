import axios from 'axios';

const deleteRecipe = async (recipeId) => {
  try {
    const response = await axios.delete(`https://t2-24-2-backend.onrender.com/recipes/${recipeId}`, {
      headers: {
        Authorization: 'Bearer panconqueso', // Ensure authorization
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

export default deleteRecipe;
