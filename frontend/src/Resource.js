import { useEffect, useState } from "react";

const ResourcePage = () => {
  const [researchResources, setResearchResources] = useState([]);
  const [userResources, setUserResources] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("research"); // State to track selected category
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResources = async (category) => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch resources based on selected category
      const response = await fetch(
        `https://manasikbackend-production.up.railway.app/api/resource?basedContent=${category}`,
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
          }
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch resources');
      }

      const data = await response.json();

      if (category === "research") {
        setResearchResources(data);
        setUserResources([]); // Clear user resources
      } else {
        setUserResources(data);
        setResearchResources([]); // Clear research resources
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResources(selectedCategory); // Fetch resources based on the initial category
  }, [selectedCategory]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>Error: {error}</p>
        <button 
          onClick={() => fetchResources(selectedCategory)} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl text-center font-bold text-gray-800">Resource Library</h1>

      {/* Category Selection */}
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={() => setSelectedCategory("research")}
          className={`px-4 py-2 rounded-lg ${selectedCategory === "research" ? "bg-green-500 text-white" : "bg-green-100"}`}
        >
          Research
        </button>
        <button 
          onClick={() => setSelectedCategory("user")}
          className={`px-4 py-2 rounded-lg ${selectedCategory === "user" ? "bg-purple-500 text-white" : "bg-purple-100"}`}
        >
          User
        </button>
      </div>

      {/* Display Resources Based on Category */}
      {selectedCategory === "research" && (
        <div className="bg-green-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-green-700 font-semibold mb-4">Research-Based Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchResources.map((resource) => (
              <div key={resource._id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl text-gray-800 font-semibold">{resource.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                {resource.mediaURL && (
                  <div className="mt-4">
                    <img
                      src={resource.mediaURL}
                      alt={resource.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                {resource.mediaURL && (
                  <a
                    href={resource.mediaURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline mt-4 inline-block"
                  >
                    Read More
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedCategory === "user" && (
        <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl text-purple-700 font-semibold mb-4">User-Based Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userResources.map((resource) => (
              <div key={resource._id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl text-gray-800 font-semibold">{resource.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
                {resource.mediaURL && (
                  <div className="mt-4">
                    <img
                      src={resource.mediaURL}
                      alt={resource.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}
                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline mt-4 inline-block"
                  >
                    View Resource
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcePage;
