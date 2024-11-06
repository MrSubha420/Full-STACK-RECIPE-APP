// src/components/RecipeDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleRecipe } from '../api/recipeApi';
import { toast } from 'react-toastify';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getSingleRecipe(id)
      .then((res) => setRecipe(res.data))
      .catch(() => toast.error('Error loading recipe details'));
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-4">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover rounded-md" />
      <p className="text-gray-700 mt-2 text-center">Cooking Time: {recipe.cookingTime} mins</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside pl-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Instructions</h2>
        <ol className="list-decimal list-inside pl-4">
          {recipe.instructions.map((instruction, index) => (
            <li key={index} className="text-gray-700">{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
