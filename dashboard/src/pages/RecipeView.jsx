// src/pages/RecipeView.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleRecipe } from '../api/recipeApi';
import { toast } from 'react-toastify';

const RecipeView = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    getSingleRecipe(id)
      .then((res) => setRecipe(res.data))
      .catch(() => toast.error('Error loading recipe'));
  }, [id]);

  if (!recipe) return <p className="text-center text-lg font-semibold">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800">{recipe.name}</h1>
      <p className="text-center text-gray-600 mt-2">
        Cooking Time: <span className="font-semibold">{recipe.cookingTime} mins</span>
      </p>
      <div className="mt-4">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-auto object-cover rounded-lg shadow-md" 
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Ingredients</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="my-1">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">Instructions</h2>
        <ol className="list-decimal pl-5 mt-2 text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="my-1">{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={() => window.history.back()} 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default RecipeView;
