import { Link } from 'react-router-dom';

const Navbar = ({ setIsPopupOpen, isLoggedIn }) => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm border-b border-purple-100 fixed top-0 z-10 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl">🧠</span>
            <span className="ml-2 text-2xl font-bold text-gray-800">MANASIK</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/resource" className="text-gray-600 hover:text-purple-600">
              Resources
            </Link>
            <Link to="/about-us" className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600">
              Contact
            </Link>

            {/* Conditionally Render Post Button */}
            {isLoggedIn && (
              <Link to="/post">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  Post
                </button>
              </Link>
            )}
          </div>

          {/* Buttons and Profile */}
          <div className="flex items-center space-x-4">
            {/* Mood Tracker Button */}
            {isLoggedIn && (
              <Link to="/mood-tracker" >
            <button
              onClick={() => setIsPopupOpen(true)}
              className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors"
            >
              <span className="text-lg">➕</span>
              Track Mood
            </button>
            </Link>)}

            {/* Join Us Button */}
            <Link to="/login">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Us
              </button>
            </Link>

            {/* Profile Logo */}
            <Link to="/profile">
              <img
                src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-600 hover:scale-105 transition-transform cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
