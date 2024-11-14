import axios from 'axios';

const getAllRecipes = async (page, pageSize = 9) => {  
  try {
    const response = await axios.get(`https://t2-24-2-backend.onrender.com/recipes?page=${page}&page_size=${pageSize}`, {
      headers: {
        Authorization: 'Bearer panconqueso',
        'Content-Type': 'application/json',  
      }
    });
    console.log(response.data);
    return response.data;  // Expect the API to return both recipes and totalPages
  } catch (error) {
    throw new Error('Error fetching recipes');
  }
};

export default getAllRecipes;
