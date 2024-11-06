// src/pages/Home.jsx
import RecipeList from '../components/RecipeList';

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Recipes</h1>
    <RecipeList />
  </div>
);

export default Home;
