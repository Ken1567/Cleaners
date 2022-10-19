import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Modal from './components/Modal';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={(<Home />)}></Route>
        <Route exact path='/about' element={(<About />)}></Route>
        <Route exact path='/modal' element={(<Modal />)}></Route>
        <Route exact path='/contact' element={(<Contact />)}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;