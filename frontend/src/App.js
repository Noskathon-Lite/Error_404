import Home from './Home';
import Resource from './Resource';
import MoodTracker from './MoodTracker';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Navbar from './Navbar';
import Community from './component/Community';
import Aboutus from './Aboutus';
import Contact from './Contact';
import EmptyPage from './EmptyPage';
import { SearchBar } from './component/SearchBar';
import { CategorySection } from './component/CategorySection';
import { useEffect, useState } from 'react';
// import { fetchResources } from './api/resources';
import { 
  AlertCircle, 
  Loader, 
  Heart,
  Brain,
  Cloud,
  Frown,
  Users,
  Sparkles,
  Menu
} from 'lucide-react';


import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [emptyPage, setEmptyPage] = useState(false);

  return (
    <div>
      
      <Router>
      {!emptyPage && <Navbar 
            setIsPopupOpen={setIsPopupOpen}
        />
  }
        <Routes>
          <Route path="/" element={<Home 
            isPopupOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
          />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/search-bar" element={<SearchBar />} />
          <Route path="/category-section" element={<CategorySection />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/*" element={<EmptyPage 
            setEmptyPage={setEmptyPage}/>} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
