import { useState } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Resource from "./Resource";
import MoodTracker from "./MoodTracker";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Navbar from "./Navbar";
import EmptyPage from "./EmptyPage";
import UserProfile from "./UserProfile";
import AnonymousPost from "./AnonymousPost";
import { SearchBar } from "./component/SearchBar";
import { CategorySection } from "./component/CategorySection";
import AboutUs from './component/AboutUs';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [userData, setUserData] = useState({ username: "", email: "" });

  return (
    <div>
      {/* Render the Navbar and pass isLoggedIn to it */}
      <Navbar isLoggedIn={isLoggedIn} setIsPopupOpen={setIsPopupOpen} />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />} />
        
        {/* Other Routes */}
        {isLoggedIn && 
        <Route path="/mood-tracker" element={<MoodTracker />} />
}
        <Route path="/resource" element={<Resource />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/search-bar" element={<SearchBar />} />
        <Route path="/category-section" element={<CategorySection />} />
        
        {/* Login Route */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/profile" /> : 
          <LoginForm 
            setUserData={(data) => { setUserData(data)}}
            setIsLoggedIn={setIsLoggedIn } />
          }
        />
          
        
        {/* Register Route */}
        <Route
          path="/register"
          element={<RegisterForm setUserData={(data) => { setUserData(data); setIsLoggedIn(true); }} />}
        />
        
        {/* Profile Route */}
        <Route
          path="/profile"
          element={isLoggedIn ? <UserProfile userData={userData} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" replace />}
        />
        
        {/* Anonymous Post Route */}
        <Route
          path="/post"
          element={isLoggedIn ? <AnonymousPost /> : <Navigate to="/login" replace />}
        />
        
        {/* Empty Page for unmatched routes */}
        <Route path="/*" element={<EmptyPage />} />
      </Routes>
    </div>
  );
}

export default App;
