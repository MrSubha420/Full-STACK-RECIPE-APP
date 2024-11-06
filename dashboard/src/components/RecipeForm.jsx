import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createRecipe, updateRecipe, getSingleRecipe } from '../api/recipeApi';
import { toast } from 'react-toastify';

const RecipeForm = ({ isEdit = false }) => {
  const [recipe, setRecipe] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    image: '',
    cookingTime: '',
  });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEdit && id) {
      setLoading(true);
      const fetchRecipe = async () => {
        try {
          const res = await getSingleRecipe(id);
          setRecipe({
            name: res.data.name || '',
            ingredients: res.data.ingredients.join(', ') || '',
            instructions: res.data.instructions.join(', ') || '',
            image: res.data.image || '',
            cookingTime: res.data.cookingTime || '',
          });
        } catch (error) {
          toast.error('Error loading recipe');
        } finally {
          setLoading(false);
        }
      };
      fetchRecipe();
    }
  }, [id, isEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setRecipe((prevRecipe) => ({ ...prevRecipe, image: file })); // Store the file instead of the preview
    }
  };

  const handleRemoveImage = () => {
    setRecipe((prevRecipe) => ({ ...prevRecipe, image: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData(); // Use FormData to send multipart/form-data
    dataToSend.append('name', recipe.name);
    dataToSend.append('ingredients', recipe.ingredients.split(',').map((item) => item.trim()));
    dataToSend.append('instructions', recipe.instructions.split(',').map((item) => item.trim()));
    dataToSend.append('cookingTime', recipe.cookingTime);

    if (recipe.image) {
      dataToSend.append('image', recipe.image); // Append the image file if it exists
    }

    if (isNaN(recipe.cookingTime) || recipe.cookingTime <= 0) {
      toast.error('Cooking time must be a positive number');
      return;
    }

    try {
      setLoading(true);
      if (isEdit) {
        await updateRecipe(id, dataToSend); // Send FormData for updating
        toast.success('Recipe updated successfully!');
      } else {
        await createRecipe(dataToSend); // Send FormData for creating a new recipe
        toast.success('Recipe created successfully!');
      }
      navigate('/'); // Redirect after successful submission
    } catch (error) {
      toast.error(`Error saving recipe: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-gray-100 shadow-md rounded">
      <label className="block my-2">
        Name:
        <input
          type="text"
          value={recipe.name}
          onChange={(e) => setRecipe((prevRecipe) => ({ ...prevRecipe, name: e.target.value }))}
          className="border w-full p-2"
          aria-label="Recipe Name"
          required
        />
      </label>
      <label className="block my-2">
        Ingredients (comma-separated):
        <textarea
          value={recipe.ingredients}
          onChange={(e) =>
            setRecipe((prevRecipe) => ({ ...prevRecipe, ingredients: e.target.value }))
          }
          className="border w-full p-2"
          aria-label="Recipe Ingredients"
          required
        />
      </label>
      <label className="block my-2">
        Instructions (comma-separated):
        <textarea
          value={recipe.instructions}
          onChange={(e) =>
            setRecipe((prevRecipe) => ({ ...prevRecipe, instructions: e.target.value }))
          }
          className="border w-full p-2"
          aria-label="Recipe Instructions"
          required
        />
      </label>
      <label className="block my-2">
        Image:
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border w-full p-2"
          aria-label="Recipe Image"
        />
      </label>
      {recipe.image && typeof recipe.image === 'string' && (
        <div className="relative mt-2">
          <img
            src={recipe.image}
            alt="Selected Recipe"
            className="w-full h-48 object-cover rounded"
          />
          <button type="button" onClick={handleRemoveImage} className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded">
            Remove
          </button>
        </div>
      )}
      <label className="block my-2">
        Cooking Time (minutes):
        <input
          type="number"
          value={recipe.cookingTime}
          onChange={(e) =>
            setRecipe((prevRecipe) => ({ ...prevRecipe, cookingTime: e.target.value }))
          }
          className="border w-full p-2"
          aria-label="Cooking Time"
          required
        />
      </label>
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded w-full mt-4"
        disabled={loading} // Disable while loading
      >
        {isEdit ? 'Update' : 'Create'} Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
