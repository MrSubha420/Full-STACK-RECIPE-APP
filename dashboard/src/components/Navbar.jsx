// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-600 text-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Recipe Dashboard</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
          <Link to="/create" className="hover:text-blue-200 transition duration-300">Create Recipe</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-white hover:text-blue-200"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-blue-700 p-4 rounded-lg">
          <Link to="/" onClick={toggleMenu} className="block text-lg hover:text-blue-200 transition duration-300">
            Home
          </Link>
          <Link to="/create" onClick={toggleMenu} className="block text-lg hover:text-blue-200 transition duration-300">
            Create Recipe
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
