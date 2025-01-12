import { Ghost, HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
function EmptyPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="relative">
          <Ghost className="w-24 h-24 text-gray-400 mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">404</h1>
        <div className="space-y-2">
          <p className="text-xl md:text-2xl font-semibold text-gray-700">
            Page not found
          </p>
          <p className="text-gray-500 max-w-md mx-auto">
            Oops! The page you're looking for seems to have vanished into thin
            air.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
        >
          <HomeIcon className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default EmptyPage;