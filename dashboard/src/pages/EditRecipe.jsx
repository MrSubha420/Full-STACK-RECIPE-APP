// src/pages/EditRecipe.jsx
import RecipeForm from '../components/RecipeForm';

const EditRecipe = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Edit Recipe</h1>
    <RecipeForm isEdit />
  </div>
);

export default EditRecipe;