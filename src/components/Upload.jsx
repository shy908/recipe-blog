import React, { useState } from 'react';

const UploadRecipePage = () => {
  const [recipeData, setRecipeData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setRecipeData({ ...recipeData, image: file });

    // Preview the uploaded image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the recipe submission here (e.g., send the data to an API)
    alert('Recipe uploaded successfully!');
    // Clear the form
    setRecipeData({
      title: '',
      description: '',
      ingredients: '',
      instructions: '',
      image: null,
    });
    setPreviewImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Add Recipe</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">Recipe Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipeData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={recipeData.description}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-sm font-semibold text-gray-700 mb-2">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={recipeData.ingredients}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Instructions */}
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-sm font-semibold text-gray-700 mb-2">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              value={recipeData.instructions}
              onChange={handleInputChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">Recipe Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-700 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Image Preview */}
          {previewImage && (
            <div className="mb-4">
              <img
                src={previewImage}
                alt="Recipe Preview"
                className="w-full h-64 object-cover rounded-md shadow-sm"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Upload Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadRecipePage;
