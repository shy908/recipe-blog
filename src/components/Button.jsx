import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const RecipeButton = ({ recipeId, label = "View Recipe", className = '' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all duration-300 hover:scale-105 ${className}`}
    >
      {label}
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

export default RecipeButton;
