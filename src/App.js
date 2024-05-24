
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavBar from './Componet/SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
      <Router>
       < SideNavBar/>
      </Router>
    </div>
  );
}

export default App;
