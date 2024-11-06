// src/components/RecipeList.jsx
import { useEffect, useState } from 'react';
import { getAllRecipes, deleteRecipe } from '../api/recipeApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getAllRecipes().then((res) => setRecipes(res.data)).catch(() => toast.error('Error loading recipes'));
  }, []);

  const handleDelete = (id) => {
    deleteRecipe(id).then(() => {
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
      toast.success('Recipe deleted');
    }).catch(() => toast.error('Error deleting recipe'));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {recipes.map((recipe) => (
        <div key={recipe._id} className="border p-4 rounded bg-white shadow-md">
          <h2 className="text-lg font-bold">{recipe.name}</h2>
          <p>Cooking Time: {recipe.cookingTime} mins</p>
          <div className="flex justify-between mt-4">
            <Link to={`/recipe/${recipe._id}`} className="text-blue-500">View</Link>
            <Link to={`/edit/${recipe._id}`} className="text-yellow-500">Edit</Link>
            <button onClick={() => handleDelete(recipe._id)} className="text-red-500">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
