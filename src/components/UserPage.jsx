import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // For user icon

const users = [
  { id: 1, name: "John Doe", email: "johndoe@example.com", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jane Smith", email: "janesmith@example.com", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Mark Johnson", email: "markj@example.com", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Mia Jakes", email: "miajakes@example.com", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Shape Gray", email: "shapegray@example.com", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Emily Davis", email: "emilydavis@example.com", image: "https://via.placeholder.com/150" },
  // Add more users here
];

const UserListItem = ({ user }) => {
    return (
      <div className="flex items-center justify-between bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-xl hover:bg-[#f1d10b] transition-all duration-300 ease-in-out">
        <div className="flex items-center space-x-4">
          <img
            src={user.image}
            alt={user.name}
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-600 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const UserPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{`Total Users: ${users.length}`}</h1>
  
        {/* User List */}
        <div className="max-w-4xl mx-auto">
          {users.map((user) => (
            <UserListItem key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };
  
  export default UserPage;