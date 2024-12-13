import React from 'react';
import featuredRecipes from '../data/recipeHighlights';
import RecipeButton from './Button';

const RecipeHighlights = () => {

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">Featured Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="recipe-card border-2 border-[#f2e10d] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:transform hover:translate-y-[-10px] transition-all duration-300 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.description}</p>
                <RecipeButton recipeId={recipe.id} label="Go to Recipe" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeHighlights;
