import React from 'react';
import RecipeButton from './Button';
import imagesData from '../data/healthyFood';

const HealthyFood = () => {

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Healthy Food Recipes</h1>
      <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex gap-4">
          {imagesData.map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0 w-[345px] bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[#f1d10b] cursor-pointer"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-90"
              />
              <div className="p-4 flex justify-between items-center">
                <h3 className="font-bold text-gray-700">{img.title}</h3>
                <RecipeButton recipeId={img.id} label="See Recipe" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthyFood;
