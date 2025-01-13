import React, { useState } from 'react';

const AnonymousPost = () => {
  const [posts, setPosts] = useState([]);
  const [description , setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Replace with your ImgBB API key
  const IMGBB_API_KEY = '6296588d84919126fce7c294356f4bf2';

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', IMGBB_API_KEY);

    const response = await fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (!data.success) throw new Error('Failed to upload image');
    return data.data.url;
  };

  // Handle new post submission
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError('');

    try {
      let fileUrl = null;
      if (file) {
        fileUrl = await uploadToImgBB(file);
      }
      const basedContent = isAnonymous ? 'user' : 'research';

      const post = {
        title,
        description: description,
        basedContent:basedContent,
        mediaURL: fileUrl,
        timestamp: new Date(),
      };

      // Send post to the backend
      const response = await fetch('https://manasikbackend-production.up.railway.app/api/resource', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      // Update the local state to show the new post
      setPosts([post, ...posts]);
      setDescription('');
      setTitle('');
      setFile(null);
      setIsAnonymous(false);
    } catch (error) {
      setUploadError(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
      setUploadError('File size must be less than 10MB');
      return;
    }
    setFile(selectedFile);
    setUploadError('');
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

        {/* Post Content Input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Share your feelings or ask a question..."
          className="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          required
        ></textarea>

        {/* File Input */}
        <div className="space-y-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="block w-full text-gray-500"
          />
          {file && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="max-h-48 rounded-lg"
              />
            </div>
          )}
          {uploadError && (
            <p className="text-red-500 text-sm">{uploadError}</p>
          )}
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
          disabled={isUploading}
          className={`w-full ${
            isUploading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200`}
        >
          {isUploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default AnonymousPost;