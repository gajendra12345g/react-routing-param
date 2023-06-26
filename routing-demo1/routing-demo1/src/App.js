import './App.css';
import { BrowserRouter as Router, Route ,Link ,Routes} from 'react-router-dom';
import HomePage from './HomePage';
import DestinationPage from './DestinationPage';
function App() {
  return (
    <Router>
      <div>
      <Link to="/">Home</Link>
      <Link to="/DestinationPage">User</Link>
      </div>
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/DestinationPage">User</Link>
        </li>
      </ul>
    </nav> */}
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/DestinationPage" element={<DestinationPage />} />
    </Routes>
  </Router>
  );
}

export default App;