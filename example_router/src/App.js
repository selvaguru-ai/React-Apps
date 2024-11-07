import logo from './logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
    <nav className='nav'>
     <Link to='/' className="nav-item"> HomePage </Link>
     <Link to='/aboutMe' className="nav-item"> ContactUs </Link>
      </nav>
    <Routes>
    <Route path = '/' element = {<HomePage/>}/>
    <Route path = '/aboutMe' element = {<ContactUs/>}/>
    </Routes>
    </div>
  );
}

export default App;
