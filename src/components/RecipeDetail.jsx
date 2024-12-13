import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories';
import images from '../data/heroData';
import imagesData from '../data/healthyFood';
import recipes from '../data/popularRecipes';
import featuredRecipes from '../data/recipeHighlights';
import { FaClock } from 'react-icons/fa'; // Assuming you want to use icons for clock

const RecipeDetail = () => {
  const { id } = useParams();
  const recipeId = parseInt(id, 10);

  const findRecipeInData = (data) =>
    data.flatMap((item) => (item.recipes ? item.recipes : item)).find((recipe) => recipe.id === recipeId);

  const recipe =
    findRecipeInData(categories) ||
    findRecipeInData(images) ||
    findRecipeInData(imagesData) ||
    findRecipeInData(recipes) ||
    findRecipeInData(featuredRecipes);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-xl">
      {recipe ? (
        <div>
          <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full max-w-xl mx-auto mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
          />
          <p className="text-lg text-center mb-6">{recipe.description}</p>

          {/* Time to Cook */}
          <div className="mb-6 flex items-center">
            <FaClock className="text-2xl text-gray-700 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Time to Cook</h2>
            <p className="text-lg font-medium text-gray-800 ml-2">{recipe.timeToCook}</p>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions</h2>
            <ol className="text-lg text-gray-800 leading-relaxed space-y-4">
              {recipe.instructions.split('\n').map((step, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-yellow-400 text-white rounded-full px-4 mr-2">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <h3 className="text-yellow-400 font-semibold">Happy Cooking!</h3>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-red-500 text-lg">Recipe not found!</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg">
            Explore Recipes
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;
