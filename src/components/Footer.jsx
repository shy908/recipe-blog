import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import { MdFacebook, MdWhatsapp } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
      <div className="flex flex-col md:flex-row justify-between pt-16 pb-8 m-2">
        {/* Explore Categories Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4 flex flex-col gap-2">
          <h3 className="text-base font-bold mb-2">Explore Categories</h3>
          {[
            'Traditional Meals',
            'Street Delicacies',
            'African Breakfasts',
            'Festive Feasts',
            'Soups & Stews',
            'Plant-Based Dishes',
            'Quick Bites'
          ].map((category, index) => (
            <Link
              key={index}
              className="hover:text-[#f1d10b] cursor-pointer"
              to="/categories"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Popular Recipes Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-4 flex flex-col gap-2">
          <h3 className="text-base font-bold mb-2">Popular Recipes</h3>
          {[
            'Jollof Rice',
            'Chapati',
            'Sadza',
            'Bunny Chow',
            'Bobotie',
            'Ugali',
            'Puff-Puff'
          ].map((recipe, index) => (
            <Link
              key={index}
              className="hover:text-[#f1d10b] cursor-pointer"
              to="/recipes"
            >
              {recipe}
            </Link>
          ))}
        </div>

        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-base font-bold mb-2">About Us</h3>
          <p className="mb-2">
            Welcome to African Recipes! We bring you the best of African culinary
            traditions, blending authentic flavors with easy-to-follow recipes. From
            everyday meals to festive dishes, we celebrate the rich and diverse
            cuisine of Africa.
          </p>
          <p>&copy;{currentYear} African Recipes. All rights reserved.</p>
        </div>

        {/* Connect with Us Section */}
        <div>
          <h3 className="text-base font-bold mb-2">Connect with Us</h3>
          <div className="flex gap-4">
            {[
              { icon: <MdFacebook size={25} />, link: 'https://facebook.com' },
              { icon: <AiFillYoutube size={25} />, link: 'https://youtube.com' },
              { icon: <AiFillInstagram size={25} />, link: 'https://instagram.com' },
              { icon: <MdWhatsapp size={25} />, link: 'https://wa.me/whatsapplink' }
            ].map((social, index) => (
              <Link
                key={index}
                className="hover:text-[#f1d10b] cursor-pointer"
                to={social.link}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;