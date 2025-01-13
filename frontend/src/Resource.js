import { useEffect, useState } from "react";

const ResourcePage = () => {
  const [researchResources, setResearchResources] = useState([]);
  const [userResources, setUserResources] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResources = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Fetch research-based resources
      const researchResponse = await fetch(
        'https://manasikbackend-production.up.railway.app/api/resource?basedContent=research',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      );

      // Fetch user-based resources
      const userResponse = await fetch(
        'https://manasikbackend-production.up.railway.app/api/resource?basedContent=user',
        {
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      );
      if (!researchResponse.ok || !userResponse.ok) {
        throw new Error('Failed to fetch resources');
      }

      const researchData = await researchResponse.json();
      const userData = await userResponse.json();

      setResearchResources(researchData);
      setUserResources(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResources();
  }, []);

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
          onClick={fetchResources}
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

      {/* Research-Based Resources Section */}
      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-green-700 font-semibold mb-4">Research-Based Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchResources.map((resource) => (
            <div key={resource._id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="text-xl text-gray-800 font-semibold">{resource.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
              {resource.link && (
                <a
                  href={resource.link}
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

      {/* User-Based Content Section */}
      <div className="bg-purple-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-purple-700 font-semibold mb-4">User-Based Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userResources.map((resource) => (
            <div key={resource._id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <h3 className="text-xl text-gray-800 font-semibold">{resource.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mt-2">{resource.description}</p>
              {resource.fileUrl && (
                <div className="mt-4">
                  <img
                    src={resource.mediaURL}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              {console.log(resource.mediaURL)}
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
    </div>
  );
};

export default ResourcePage;
