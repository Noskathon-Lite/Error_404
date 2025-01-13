import { useEffect, useState } from "react";

const ResourcePage = () => {
  const [researchData, setResearchData] = useState([]);
  const [userSuggestedData, setUserSuggestedData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("depression");

  useEffect(() => {
    // Simulated Research-Based Data (mock data)
    const mockResearchData = [
      {
        title: `Research on ${selectedCategory}`,
        description: "Detailed research data on mental health issues.",
        link: "https://some-verified-link.com"
      },
    ];
    setResearchData(mockResearchData);

    // Simulated User-Suggested Content (mock data)
    const mockUserSuggestedData = [
      {
        title: "My Journey with Depression",
        description: "A blog post sharing personal experiences.",
        type: "blog",
        link: "https://user-blog.com/depression"
      },
      {
        title: "Overcoming Anxiety - My Story",
        description: "A video blog on overcoming anxiety.",
        type: "video",
        link: "https://user-video.com/anxiety"
      }
    ];
    setUserSuggestedData(mockUserSuggestedData);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update category for research-based data
  };

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl text-center font-bold text-gray-800">Resource Library</h1>

      {/* Research-Based Resources Section */}
      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-green-700 font-semibold mb-4">Research-Based Resources</h2>
        <p className="mb-4">Select a category to explore scientifically proven resources:</p>
        <ul className="space-y-2">
          <li
            onClick={() => handleCategoryClick("depression")}
            className="cursor-pointer px-4 py-2 bg-green-200 hover:bg-green-300 rounded-lg transition-colors"
          >
            Depression
          </li>
          <li
            onClick={() => handleCategoryClick("anxiety")}
            className="cursor-pointer px-4 py-2 bg-green-200 hover:bg-green-300 rounded-lg transition-colors"
          >
            Anxiety
          </li>
          <li
            onClick={() => handleCategoryClick("bipolar")}
            className="cursor-pointer px-4 py-2 bg-green-200 hover:bg-green-300 rounded-lg transition-colors"
          >
            Bipolar Disorder
          </li>
        </ul>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchData.length > 0 ? (
            researchData.map((resource, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-800 font-semibold">{resource.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline mt-4 inline-block"
                >
                  Read More
                </a>
              </div>
            ))
          ) : (
            <p>No research data available for this category.</p>
          )}
        </div>
      </div>

      {/* User Suggested Content Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">User-Suggested Content</h2>
        <p className="mb-4">Browse personal experiences, blogs, videos, and more from users:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userSuggestedData.length > 0 ? (
            userSuggestedData.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-xl text-gray-800 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                {item.type === "video" ? (
                  <video controls className="w-full mt-4 rounded-lg">
                    <source src={item.link} type="video/mp4" />
                  </video>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline mt-4 inline-block"
                  >
                    View Blog
                  </a>
                )}
              </div>
            ))
          ) : (
            <p>No user suggestions available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResourcePage;
