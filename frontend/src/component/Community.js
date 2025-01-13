import React, { useState } from "react";

// Sample user profiles
const users = [
  { name: "John Doe", avatar: "https://via.placeholder.com/100", bio: "Mental health advocate, sharing experiences" },
  { name: "Jane Smith", avatar: "https://via.placeholder.com/100", bio: "Wellness coach, here to help!" },
  { name: "Mark Johnson", avatar: "https://via.placeholder.com/100", bio: "Survivor, open to connect and share" },
];

// Sample community discussion threads
const discussions = [
  {
    title: "Coping with Anxiety in the Workplace",
    creator: "John Doe",
    date: "2025-01-10",
    comments: 5,
  },
  {
    title: "Finding Peace Through Meditation",
    creator: "Jane Smith",
    date: "2025-01-08",
    comments: 8,
  },
  {
    title: "Supporting Friends with Depression",
    creator: "Mark Johnson",
    date: "2025-01-05",
    comments: 3,
  },
];

const Community = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (message) {
      alert(`Message to ${selectedUser.name}: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <main className="pt-24 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16 md:py-24">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Community Hub</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect, share, and learn from others in our supportive community.
            </p>
          </div>

          {/* User Profiles Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Meet the Community</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {users.map((user, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4">
                    <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
                    <div>
                      <h3 className="font-semibold text-xl text-gray-800">{user.name}</h3>
                      <p className="text-gray-600">{user.bio}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Message
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Discussions Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Ongoing Discussions</h2>
            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-purple-100 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{discussion.title}</h3>
                      <p className="text-gray-600">By {discussion.creator} on {discussion.date}</p>
                    </div>
                    <div className="text-purple-600">
                      {discussion.comments} Comments
                    </div>
                  </div>
                  <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                    Join Discussion
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Message Popup */}
          {selectedUser && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Message {selectedUser.name}</h2>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full p-2 border rounded-lg mb-4 h-24 focus:border-purple-300 focus:outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setSelectedUser(null)}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleMessageSubmit}
                    disabled={!message}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl">🧠</span>
            <span className="ml-2 text-xl font-bold text-gray-800">MANASIK</span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Together, we're building a supportive community for mental health
            resources and experiences.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Community;
