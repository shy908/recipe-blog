import React from 'react';
import categories from '../data/categories';
import images from '../data/heroData';
import imagesData from '../data/healthyFood';
import recipes from '../data/popularRecipes';
import featuredRecipes from '../data/recipeHighlights';
import RecipeButton from './Button';

const RecipePage = () => {
  // Combine all data sources into one array
  const allRecipes = [
    ...categories.flatMap(item => item.recipes || []),
    ...images,
    ...imagesData,
    ...recipes,
    ...featuredRecipes
  ];

  // Sort recipes by 'id' in ascending order
  const sortedRecipes = allRecipes.sort((a, b) => a.id - b.id);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedRecipes.map((recipe) => (
          <div key={recipe.id} className="border border-gray-200 rounded-lg p-4 transition-transform transform hover:scale-105">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
            <p className="text-md text-gray-600">{recipe.description}</p>
            <RecipeButton recipeId={recipe.id} label="See Recipe" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
