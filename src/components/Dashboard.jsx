import React from 'react';
import { FaUser, FaClipboardList, FaHistory, FaCog } from 'react-icons/fa';

const UserDashboard = () => {
  // Example user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profileImage: 'https://via.placeholder.com/150',
    uploadedRecipes: 5,
    recentActivities: [
      { id: 1, activity: 'Uploaded a new recipe: "Spaghetti Carbonara"' },
      { id: 2, activity: 'Liked a recipe: "Vegan Salad"' },
      { id: 3, activity: 'Commented on recipe: "Healthy Smoothie"' },
    ],
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-8">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome, {user.name}!</h1>
        <div className="flex items-center">
          <FaCog className="text-gray-600 text-2xl mr-4 cursor-pointer" />
          <img src={user.profileImage} alt="Profile" className="w-12 h-12 rounded-full border-2 border-gray-300" />
        </div>
      </div>

      {/* Dashboard Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Profile Overview */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Profile Overview</h3>
          <div className="flex items-center mb-4">
            <img src={user.profileImage} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{user.name}</h4>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Uploaded Recipes */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Uploaded Recipes</h3>
          <div className="flex items-center justify-between mb-4">
            <p className="text-lg text-gray-700">{user.uploadedRecipes} Recipes</p>
            <FaClipboardList className="text-yellow-500 text-2xl" />
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
          <ul className="space-y-4">
            {user.recentActivities.map((activity) => (
              <li key={activity.id} className="text-gray-700">
                <span className="font-semibold">{activity.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
