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
import HouseCleaning from './components/HouseCleaning';
import HouseKeeping from './components/HouseKeeping';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={(<Home />)}></Route>
        <Route exact path='/about' element={(<About />)}></Route>
        <Route exact path='/modal' element={(<ModalButton />)}></Route>
        <Route exact path='/contact' element={(<Contact />)}></Route>
        <Route exact path='/housecleaning' element={(<HouseCleaning />)}></Route>
        <Route exact path='/housekeeping' element={(<HouseKeeping />)}></Route>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;