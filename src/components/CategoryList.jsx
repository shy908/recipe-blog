import React, { useState } from "react";
import categories from "../data/categories";
import RecipeButton from "./Button";

const CategoryList = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Explore Categories</h1>

      {/* Tabs for categories */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 text-lg ${
              selectedCategory === category.id
                ? "bg-yellow-400 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-yellow-100"
            }`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Display the selected category */}
      <div className="mt-8">
        {categories
          .filter((category) => category.id === selectedCategory)
          .map((category) => (
            <div key={category.id}>
              <h2 className="text-2xl font-semibold text-center mb-5">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.recipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                      <p className="text-gray-600">{recipe.description}</p>
                      <RecipeButton recipeId={recipe.id} label="Go to Recipe" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryList;
