import React, { useState, useEffect } from 'react';
import getAllRecipes from '../../services/fetch/getRecipes'; 
import updateRecipe from '../../services/patch/updateRecipe'; // Import update service
import deleteRecipe from '../../services/delete/deleteRecipe';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipeModal from '../../components/RecipeModal/RecipeModal'; // Import RecipeModal
import PageSelector from '../../components/PageSelector/PageSelector';

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null); // Manage the selected recipe for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal visibility

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllRecipes(currentPage);
      setRecipes(data || []);
      setTotalPages(data.totalPages || 1);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  // Function to handle recipe updates
  const handleUpdate = async (recipeId, updatedRecipeData) => {
    try {
      await updateRecipe(recipeId, updatedRecipeData);
      setRecipes((prevRecipes) => 
        prevRecipes.map((recipe) => 
          recipe.id === recipeId ? { ...recipe, ...updatedRecipeData } : recipe
        )
      );
      closeModal(); // Close modal after update
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  // Function to handle recipe deletion
  const handleDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId);
      setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
      closeModal(); // Close modal after deletion
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  // Function to open the modal
  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="main-container">
      <h1>Recipes</h1>
      <div className="recipe-grid">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onEdit={() => openModal(recipe)} // Pass the open modal function to the card
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
      <PageSelector
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {isModalOpen && selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onUpdate={handleUpdate} // Pass the update function to the modal
          onClose={closeModal} // Pass the close modal function to the modal
          onDelete={handleDelete} // Pass the delete function to the modal
        />
      )}
    </div>
  );
};

export default RecipesPage;