import React, { useState, useEffect } from 'react';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import images from '../data/heroData';
import RecipeButton from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease', 
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full bg-cover bg-center h-[600px] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[index]?.image || images[0].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto relative z-10 h-full flex flex-col justify-center px-4">
          <div className="flex flex-col gap-6 text-white max-w-xl" data-aos="zoom-in">
            <h1 className="text-5xl font-semibold" data-aos="zoom-in" data-aos-delay="200">
              {images[index].title}
            </h1>
            <p className="text-lg opacity-80">{images[index].description}</p>
            <RecipeButton recipeId={images[index]?.id} label="See Recipe" className="w-1/2 md:w-1/3" />
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="hearderslider relative w-full mt-[-120px] z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6 text-white">
            <h4 className="text-lg font-semibold">Latest Recipes</h4>
            <div className="flex gap-2">
              <button
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-[#f1d10b] hover:border-[#f1d10b] transition"
                onClick={() => setIndex((index - 1 + images.length) % images.length)}
              >
                <FaLeftLong />
              </button>
              <button
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-[#f1d10b] hover:border-[#f1d10b] transition"
                onClick={() => setIndex((index + 1) % images.length)}
              >
                <FaRightLong />
              </button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {images.map((img, i) => (
              <div
                key={img.id}
                className={`flex-shrink-0 w-[345px] bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-all duration-200 hover:shadow-[#f1d10b] cursor-pointer ${
                  i === index ? 'ring-4 ring-[#f1d10b]' : ''
                }`}
                onClick={() => setIndex(i)}
              >
                <img src={img.image} alt={img.title} className="w-full h-[150px] object-cover" />
                <div className="p-4">
                  <span className="block text-orange-500 text-sm mb-2">Delicious</span>
                  <h3 className="text-lg font-semibold text-gray-900">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
