import React from 'react';
import Hero from '../components/Hero';
import RecipeHighlights from '../components/RecipeHighlights';
import HealthyFood from '../components/HealthyFood';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Home = () => {
  return (
    <div className="font-sans">
      <Hero />
      <RecipeHighlights />
      <HealthyFood />
      <div className="flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg p-8 mx-auto mt-8 max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Community</h2>
        <p className="text-gray-600 mb-6">
          Share your favorite recipes and connect with food enthusiasts worldwide!
        </p>
        <IoIosArrowDropdownCircle className="text-[#f1d10b] text-5xl mb-6 animate-bounce" />
        <button className="px-6 py-3 bg-[#f1d20bcb] text-white rounded-lg shadow hover:bg-[#f1d10b] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
