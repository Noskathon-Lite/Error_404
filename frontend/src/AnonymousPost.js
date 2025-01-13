import { useState } from "react";

const AnonymousPost = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [newPost, setNewPost] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [username, setUsername] = useState('');
  const [category, setCategory] = useState('research'); // Track the category for research or user-suggested

  // Handle new post submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const post = {
      username: isAnonymous ? 'Anonymous' : username,
      title,
      content: newPost,
      isAnonymous,
      category, // research or user-suggested
      timestamp: new Date(),
    };

    // Send the post to the parent (ResourcePage)
    onPostSubmit(post);

    // Reset form
    setTitle('');
    setNewPost('');
    setUsername('');
    setIsAnonymous(false);
    setCategory('research');
  };

  return (
    <div className="max-w-3xl mx-auto mt-20 p-6 bg-gray-200 rounded-md shadow-lg">
      {/* Post Submission Form */}
      <form onSubmit={handlePostSubmit} className="mb-8">
        {/* Title Input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title of your post"
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />

        {/* Username Input (only if not anonymous) */}
        {!isAnonymous && (
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        )}

        {/* Post Content Input */}
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your feelings or ask a question..."
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          required
        ></textarea>

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="research">Research-Based</option>
            <option value="user">User-Suggested</option>
          </select>
        </div>

        {/* Anonymous Toggle */}
        <div className="flex items-center mt-3 mb-4">
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
            id="anonymous"
            className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="anonymous" className="text-gray-700">Post as Anonymous</label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AnonymousPost;
