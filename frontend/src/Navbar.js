import { Link } from 'react-router-dom'

const Navbar = ({setIsPopupOpen })=>{
    return (
        <header className="w-full bg-white/90 backdrop-blur-sm border-b border-purple-100 fixed top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="text-2xl">🧠</span>
              <span className="ml-2 text-2xl font-bold text-gray-800">
                MANASIK
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/resource" className="text-gray-600 hover:text-purple-600">
                Resources
              </Link>
              <Link to="/community" className="text-gray-600 hover:text-purple-600">
                Community
              </Link>
              <Link to="/about-us" className="text-gray-600 hover:text-purple-600">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-purple-600">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center gap-2 border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-colors"
              >
                <span className="text-lg">➕</span>
                Track Mood
              </button>
              <Link to="/login">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Join Us
              </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Navbar;