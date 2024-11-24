import logo from './logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import './App.css';
import ObjectsEx from './ObjectsEx';
import Budget from './Budget';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
          <Link to='/' className="nav-item"> HomePage </Link>
          <Link to='/aboutMe' className="nav-item"> ContactUs </Link>
          <Link to='/ObjectsEx' className="nav-item">Objects Example</Link>
          <Link to='/Budget' className='nav-item'>Budget</Link>
      </nav>
    <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/aboutMe' element = {<ContactUs/>}/>
          <Route path = '/ObjectsEx' element = {<ObjectsEx/>}/>
          <Route path = '/Budget' element={<Budget/>}/>
    </Routes>
    </div>
  );
}

export default App;
