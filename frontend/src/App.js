import Home from './Home';
import Resource from './Resource';
import MoodTracker from './MoodTracker';

import { SearchBar } from './component/SearchBar';
import { CategorySection } from './component/CategorySection';
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


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul className='flex m-2'>
            <li className='m-2'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2'>
              <Link to="/mood-tracker">Mood Tracker</Link>
            </li>
            <li className='m-2'><Link to="/resource">Resource</Link></li>
            <li className='m-2'><Link to="/search-bar">SearchBar</Link></li>
            <li className='m-2'><Link to="/category-section">CategorySection</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/search-bar" element={<SearchBar />} />
          <Route path="/category-section" element={<CategorySection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
