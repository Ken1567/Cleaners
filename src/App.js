import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import ModalButton from './components/ModalButton';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Cleaning from './components/Cleaning';
import Keeping from './components/Keeping';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={(<Home />)}></Route>
        <Route exact path='/about' element={(<About />)}></Route>
        <Route exact path='/modal' element={(<ModalButton />)}></Route>
        <Route exact path='/contact' element={(<Contact />)}></Route>
        <Route exact path='/housecleaning' element={(<Cleaning />)}></Route>
        <Route exact path='/housekeeping' element={(<Keeping />)}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;