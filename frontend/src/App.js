import Home from './Home';
import MoodTracker from './MoodTracker';
import { BrowserRouter as Router , Routes ,  Route , Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul className='flex m-2'>
            <li className='m-2'><Link to="/">Home</Link></li>
            <li className='m-2'><Link to="/mood-tracker">Mood Tracker</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
