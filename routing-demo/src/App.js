import './App.css';
import { BrowserRouter as Router, Route ,Link ,Routes} from 'react-router-dom';
import HomePage from './components/DestinationPage';
import DestinationPage from './components/DestinationPage';
function App() {
  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/DestinationPage">Destination Page</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/DestinationPage" element={<DestinationPage />} />
    </Routes>
  </Router>
  );
}

export default App;