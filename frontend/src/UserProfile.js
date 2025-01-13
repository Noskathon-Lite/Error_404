import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ userEmail, userUsername, setIsLoggedIn }) => {
  const [profileImage, setProfileImage] = useState(null);
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const userProfileData = {
      email: userEmail,
      username: userUsername,
      bio,
      profileImage,
    };
    console.log("User Profile Data:", userProfileData);
    alert("Profile updated successfully!");
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update the login state
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 overflow-auto">
        <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>
        <form onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="mb-6 flex flex-col items-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-4 border-2 border-blue-500"
              />
            ) : (
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center border-2 border-blue-500">
                <span className="text-gray-400">No Image</span>
              </div>
            )}
            <label className="block text-sm font-medium text-gray-600">
              Upload Profile Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={userEmail}
              disabled
              className="w-full px-3 py-2 mt-1 text-gray-600 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              value={userUsername}
              disabled
              className="w-full px-3 py-2 mt-1 text-gray-600 bg-gray-200 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Bio
            </label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Write a short bio..."
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
          >
            Save Profile
          </button>

          {/* Logout Button */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
